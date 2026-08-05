import express from "express";
import { PrismaClient } from "@prisma/client";
import Stripe from "stripe";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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

router.post("/ensure-customer", async (req, res) => {
  const authUser = getAuthenticatedUser(req);

  if (!authUser) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const user = await prisma.user.findUnique({
      where: { id: authUser.userId },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.stripeCustomerId) {
      return res.status(200).json({ stripeCustomerId: user.stripeCustomerId });
    }

    const customer = await stripe.customers.create({
      email: user.email,
      name: user.name || undefined,
    });

    await prisma.user.update({
      where: { id: user.id },
      data: { stripeCustomerId: customer.id },
    });

    return res.status(200).json({ stripeCustomerId: customer.id });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

router.post("/create-setup-intent", async (req, res) => {
  const authUser = getAuthenticatedUser(req);

  if (!authUser) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: authUser.userId },
    });

    if (!user || !user.stripeCustomerId) {
      return res
        .status(400)
        .json({ message: "No Stripe customer found for this user." });
    }

    const setupIntent = await stripe.setupIntents.create({
      customer: user.stripeCustomerId,
      payment_method_types: ["card"],
    });

    return res.status(200).json({ clientSecret: setupIntent.client_secret });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/payment-methods", async (req, res) => {
  const authUser = getAuthenticatedUser(req);

  if (!authUser) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: authUser.userId },
    });

    if (!user || !user.stripeCustomerId) {
      return res.status(200).json({ paymentMethods: [] });
    }

    const [paymentMethods, customer] = await Promise.all([
      stripe.paymentMethods.list({
        customer: user.stripeCustomerId,
        type: "card",
      }),
      stripe.customers.retrieve(user.stripeCustomerId),
    ]);

    const defaultId = customer.invoice_settings?.default_payment_method;

    const formatted = paymentMethods.data.map((pm) => ({
      id: pm.id,
      brand: pm.card.brand,
      last4: pm.card.last4,
      expMonth: pm.card.exp_month,
      expYear: pm.card.exp_year,
      isDefault: pm.id === defaultId,
    }));

    return res.status(200).json({ paymentMethods: formatted });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

router.delete("/payment-methods/:id", async (req, res) => {
  const authUser = getAuthenticatedUser(req);

  if (!authUser) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: authUser.userId },
    });

    if (!user || !user.stripeCustomerId) {
      return res.status(404).json({ message: "No payment methods found." });
    }

    const paymentMethod = await stripe.paymentMethods.retrieve(req.params.id);

    if (paymentMethod.customer !== user.stripeCustomerId) {
      return res
        .status(403)
        .json({ message: "Not authorized to remove this payment method." });
    }

    await stripe.paymentMethods.detach(req.params.id);

    return res.status(200).json({ message: "Payment method removed." });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

router.post("/payment-methods/:id/set-default", async (req, res) => {
  const authUser = getAuthenticatedUser(req);

  if (!authUser) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: authUser.userId },
    });

    if (!user || !user.stripeCustomerId) {
      return res.status(404).json({ message: "No payment methods found." });
    }

    const paymentMethod = await stripe.paymentMethods.retrieve(req.params.id);

    if (paymentMethod.customer !== user.stripeCustomerId) {
      return res
        .status(403)
        .json({ message: "Not authorized to modify this payment method." });
    }

    await stripe.customers.update(user.stripeCustomerId, {
      invoice_settings: {
        default_payment_method: req.params.id,
      },
    });

    return res.status(200).json({ message: "Default payment method updated." });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

router.post("/payment-methods/:id/confirm-saved", async (req, res) => {
  const authUser = getAuthenticatedUser(req);

  if (!authUser) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: authUser.userId },
    });

    if (!user || !user.stripeCustomerId) {
      return res.status(404).json({ message: "No customer found." });
    }

    const existing = await stripe.paymentMethods.list({
      customer: user.stripeCustomerId,
      type: "card",
    });

    if (existing.data.length === 1) {
      await stripe.customers.update(user.stripeCustomerId, {
        invoice_settings: {
          default_payment_method: req.params.id,
        },
      });
    }

    return res.status(200).json({ message: "Confirmed." });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
});
export default router;
