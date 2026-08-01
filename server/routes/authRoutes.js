import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    const passwordIsValid = user
      ? await bcrypt.compare(password, user.password)
      : false;
    if (!user || !passwordIsValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({ token });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    res
      .json({
        message: "user has been addded successfully",
      })
      .status(200);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Something went wrong" });
  }
});
export default router;
