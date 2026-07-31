import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

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

export default router;
