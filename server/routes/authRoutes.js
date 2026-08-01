import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/register", (req, res) => {});

router.post("/login", (req, res) => {});

export default router;
