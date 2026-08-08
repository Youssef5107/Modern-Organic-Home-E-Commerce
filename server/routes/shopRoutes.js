import express from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// Requires a valid Bearer token; attaches the decoded user to req.user.
// NOTE: adjust JWT_SECRET / payload shape to match whatever your
// existing /auth/login route already signs tokens with.
const requireAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.slice("Bearer ".length)
      : null;

    if (!token) {
      return res.status(401).json({ error: "Please log in to continue." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: { id: decoded.id ?? decoded.userId },
    });

    if (!user) {
      return res.status(401).json({ error: "Please log in to continue." });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Please log in to continue." });
  }
};

router.get("/collections", async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        products: {
          include: {
            reviews: true,
          },
        },
      },
    });

    const formattedCollections = categories.map((category) => ({
      id: category.slug,
      title: category.name,
      description: category.description ?? "",
      products: category.products.map((p) => {
        const reviewCount = p.reviews.length;
        const avgRating =
          reviewCount > 0
            ? p.reviews.reduce((acc, r) => acc + r.rating, 0) / reviewCount
            : (p.rating ?? 0);

        return {
          id: p.slug ?? p.id,
          name: p.name,
          series: p.series ?? null,
          price: Number(p.price),
          tags: p.tags ?? [],
          glaze: p.glaze ?? null,
          image_url: p.imageUrl ?? null,
          is_favorite: p.isFavorite ?? false,
          is_new_arrival: p.isNewArrival ?? false,
          about: p.about ?? "",
          material: p.material ?? null,
          technique: p.technique ?? null,
          rating: Number(avgRating.toFixed(1)),
          review_count: reviewCount,
          reviews: p.reviews.map((r) => ({
            name: r.name ?? "Anonymous",
            date: r.date,
            rating: r.rating,
            comment: r.comment,
          })),
        };
      }),
    }));

    res.json({ collections: formattedCollections });
  } catch (error) {
    console.error("Error fetching all collections:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/collections/:categorySlug", async (req, res) => {
  try {
    const { categorySlug } = req.params;

    // 1. Fetch requested Category with nested Products and Reviews
    const category = await prisma.category.findUnique({
      where: { slug: categorySlug },
      include: {
        products: {
          include: {
            reviews: true,
          },
        },
      },
    });

    if (!category) {
      return res.status(404).json({ error: "Collection not found" });
    }

    // 2. Format products to match expected frontend structure
    const formattedProducts = category.products.map((p) => {
      const reviewCount = p.reviews.length;
      const avgRating =
        reviewCount > 0
          ? p.reviews.reduce((acc, r) => acc + r.rating, 0) / reviewCount
          : (p.rating ?? 0);

      return {
        id: p.slug ?? p.id,
        name: p.name,
        series: p.series ?? null,
        price: Number(p.price),
        tags: p.tags ?? [],
        glaze: p.glaze ?? null,
        image_url: p.imageUrl ?? null,
        is_favorite: p.isFavorite ?? false,
        is_new_arrival: p.isNewArrival ?? false,
        about: p.about ?? "",
        material: p.material ?? null,
        technique: p.technique ?? null,
        rating: Number(avgRating.toFixed(1)),
        review_count: reviewCount,
        reviews: p.reviews.map((r) => ({
          name: r.name ?? "Anonymous",
          date: r.date,
          rating: r.rating,
          comment: r.comment,
        })),
      };
    });

    // 3. Return collection output for React component
    res.json({
      id: category.slug,
      title: category.name,
      description: category.description ?? "",
      products: formattedProducts,
    });
  } catch (error) {
    console.error("Error fetching collection:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/products/:productId", async (req, res) => {
  try {
    const { productId } = req.params;

    // Find by slug or ID
    const product = await prisma.product.findFirst({
      where: {
        OR: [{ slug: productId }, { id: productId }],
      },
      include: {
        reviews: true,
      },
    });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const reviewCount = product.reviews.length;
    const avgRating =
      reviewCount > 0
        ? product.reviews.reduce((acc, r) => acc + r.rating, 0) / reviewCount
        : (product.rating ?? 0);

    // Format output to match frontend structure
    const formattedProduct = {
      id: product.slug ?? product.id,
      name: product.name,
      series: product.series ?? null,
      price: Number(product.price),
      tags: product.tags ?? [],
      glaze: product.glaze ?? null,
      image_url: product.imageUrl ?? null,
      is_favorite: product.isFavorite ?? false,
      is_new_arrival: product.isNewArrival ?? false,
      about: product.about ?? "",
      material: product.material ?? null,
      technique: product.technique ?? null,
      rating: Number(avgRating.toFixed(1)),
      review_count: reviewCount,
      reviews: product.reviews.map((r) => ({
        name: r.name ?? "Anonymous",
        date: r.date,
        rating: r.rating,
        comment: r.comment,
      })),
    };

    res.json(formattedProduct);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/products/:productId/reviews", requireAuth, async (req, res) => {
  try {
    const { productId } = req.params;
    const { rating, comment } = req.body;
    const reviewerName = req.user.name || req.user.email || "Anonymous";

    if (!rating || !comment || !comment.trim()) {
      return res
        .status(400)
        .json({ error: "Rating and comment are required." });
    }

    const product = await prisma.product.findFirst({
      where: {
        OR: [{ slug: productId }, { id: productId }],
      },
      include: {
        reviews: true,
      },
    });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const reviewRating = Number(rating);
    const reviewComment = comment.trim();
    const reviewDate = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const createdReview = await prisma.review.create({
      data: {
        name: reviewerName,
        date: reviewDate,
        rating: reviewRating,
        comment: reviewComment,
        productId: product.id,
      },
    });

    const reviewCount = product.reviews.length + 1;
    const avgRating =
      (product.reviews.reduce((acc, r) => acc + r.rating, 0) + reviewRating) /
      reviewCount;

    await prisma.product.update({
      where: { id: product.id },
      data: {
        reviewCount,
        rating: avgRating,
      },
    });

    res.status(201).json({
      review: {
        name: createdReview.name,
        date: reviewDate,
        rating: createdReview.rating,
        comment: createdReview.comment,
      },
      review_count: reviewCount,
      rating: Number(avgRating.toFixed(1)),
    });
  } catch (error) {
    console.error("Error creating review:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
