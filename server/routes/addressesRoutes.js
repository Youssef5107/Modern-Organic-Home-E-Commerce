import express from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";
const getAuthenticatedUser = (req) => {
  const authHeader = req.headers.authorization || "";
  if (!authHeader.startsWith("Bearer ")) return null;

  try {
    const token = authHeader.slice(7);
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

// --- Shipping Method Routes ---

// GET user's saved shipping method preference
router.get("/shipping-method", async (req, res) => {
  const authUser = getAuthenticatedUser(req);
  if (!authUser) {
    return res.status(401).json({
      message:
        "Unauthorized. Please log in or check your credentials to access this section.",
    });
  }
  try {
    const user = await prisma.user.findUnique({
      where: { id: authUser.userId },
      select: { shippingMethod: true },
    });
    return res
      .status(200)
      .json({ shippingMethod: user?.shippingMethod || "standard" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// PUT update user's preferred shipping method
router.put("/shipping-method", async (req, res) => {
  const authUser = getAuthenticatedUser(req);
  if (!authUser) {
    return res.status(401).json({
      message:
        "Unauthorized. Please log in or check your credentials to access this section.",
    });
  }
  const { shippingMethod } = req.body;

  try {
    const user = await prisma.user.update({
      where: { id: authUser.userId },
      data: { shippingMethod },
      select: { shippingMethod: true },
    });
    return res.status(200).json({ shippingMethod: user.shippingMethod });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// --- Address Routes ---

router.get("/", async (req, res) => {
  const authUser = getAuthenticatedUser(req);
  if (!authUser) {
    return res.status(401).json({
      message:
        "Unauthorized. Please log in or check your credentials to access this section.",
    });
  }
  try {
    const addresses = await prisma.address.findMany({
      where: { userId: authUser.userId },
      orderBy: { createdAt: "desc" },
    });
    return res.status(200).json({ addresses });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const authUser = getAuthenticatedUser(req);
  if (!authUser) {
    return res.status(401).json({
      message:
        "Unauthorized. Please log in or check your credentials to access this section.",
    });
  }
  const { label, fullName, street, city, state, postalCode, phone, isDefault } =
    req.body;

  try {
    if (isDefault) {
      await prisma.address.updateMany({
        where: { userId: authUser.userId },
        data: { isDefault: false },
      });
    }

    const address = await prisma.address.create({
      data: {
        label,
        fullName,
        street,
        city,
        state,
        postalCode,
        phone,
        isDefault: Boolean(isDefault),
        userId: authUser.userId,
      },
    });

    return res.status(201).json({ address });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const authUser = getAuthenticatedUser(req);
  if (!authUser) {
    return res.status(401).json({
      message:
        "Unauthorized. Please log in or check your credentials to access this section.",
    });
  }
  const { label, fullName, street, city, state, postalCode, phone, isDefault } =
    req.body;

  try {
    if (isDefault) {
      await prisma.address.updateMany({
        where: { userId: authUser.userId },
        data: { isDefault: false },
      });
    }

    const updated = await prisma.address.update({
      where: { id: req.params.id },
      data: {
        label,
        fullName,
        street,
        city,
        state,
        postalCode,
        phone,
        isDefault,
      },
    });

    return res.status(200).json({ address: updated });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.patch("/:id/set-default", async (req, res) => {
  const authUser = getAuthenticatedUser(req);
  if (!authUser) {
    return res.status(401).json({
      message:
        "Unauthorized. Please log in or check your credentials to access this section.",
    });
  }
  try {
    await prisma.address.updateMany({
      where: { userId: authUser.userId },
      data: { isDefault: false },
    });

    const address = await prisma.address.update({
      where: { id: req.params.id },
      data: { isDefault: true },
    });

    return res.status(200).json({ address });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const authUser = getAuthenticatedUser(req);
  if (!authUser) {
    return res.status(401).json({
      message:
        "Unauthorized. Please log in or check your credentials to access this section.",
    });
  }
  try {
    await prisma.address.delete({
      where: { id: req.params.id },
    });
    return res.status(200).json({ message: "Address removed." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
