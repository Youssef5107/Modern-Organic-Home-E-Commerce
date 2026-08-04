import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

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

    // Format all collections and their products to match your frontend structure
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
          review_count: p.reviewCount ?? reviewCount,
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
        review_count: p.reviewCount ?? reviewCount,
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
      review_count: product.reviewCount ?? reviewCount,
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

export default router;
