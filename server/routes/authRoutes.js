import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Stripe from "stripe";

const prisma = new PrismaClient();
const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

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

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const normalizedEmail = String(email || "")
    .trim()
    .toLowerCase();

  if (!normalizedEmail || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  if (!isValidEmail(normalizedEmail)) {
    return res
      .status(400)
      .json({ message: "Please enter a valid email address." });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });
    const passwordIsValid = user
      ? await bcrypt.compare(password, user.password)
      : false;

    if (!user || !passwordIsValid) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(200).json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const normalizedEmail = String(email || "")
    .trim()
    .toLowerCase();

  if (!name || !normalizedEmail || !password) {
    return res
      .status(400)
      .json({ message: "Name, email, and password are required." });
  }

  if (!isValidEmail(normalizedEmail)) {
    return res
      .status(400)
      .json({ message: "Please enter a valid email address." });
  }

  if (password.length < 8) {
    return res
      .status(400)
      .json({ message: "Password must be at least 8 characters." });
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingUser) {
      return res
        .status(409)
        .json({ message: "An account with this email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email: normalizedEmail,
        password: hashedPassword,
        name,
      },
    });

    return res.status(200).json({
      message: "Account created successfully. You can sign in now.",
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/me", async (req, res) => {
  const authUser = getAuthenticatedUser(req);

  if (!authUser) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: authUser.userId },
      select: { id: true, name: true, email: true },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/preferences", async (req, res) => {
  const authUser = getAuthenticatedUser(req);

  if (!authUser) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: authUser.userId },
      select: { id: true, name: true, email: true },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const favorites = await prisma.favorite.findMany({
      where: { userId: user.id },
      select: { productId: true },
    });

    const cartItems = await prisma.cartItem.findMany({
      where: { userId: user.id },
      select: { productId: true, quantity: true },
    });

    const quantities = cartItems.reduce((acc, item) => {
      acc[item.productId] = item.quantity;
      return acc;
    }, {});

    return res.status(200).json({
      user,
      favorites: favorites.map((item) => item.productId),
      cartItems: cartItems.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      })),
      quantities,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

router.post("/sync", async (req, res) => {
  const authUser = getAuthenticatedUser(req);

  if (!authUser) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const { favorites = [], cartItems = [] } = req.body;

    await prisma.$transaction(async (tx) => {
      await tx.favorite.deleteMany({ where: { userId: authUser.userId } });
      await tx.cartItem.deleteMany({ where: { userId: authUser.userId } });

      if (favorites.length > 0) {
        await tx.favorite.createMany({
          data: favorites.map((productId) => ({
            userId: authUser.userId,
            productId,
          })),
        });
      }

      if (cartItems.length > 0) {
        await tx.cartItem.createMany({
          data: cartItems.map((item) => ({
            userId: authUser.userId,
            productId: item.productId,
            quantity: item.quantity || 1,
          })),
        });
      }
    });

    return res.status(200).json({ message: "Preferences synced successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
