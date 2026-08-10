import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

export const getStripe = () => {
  if (!stripePromise) {
    const key = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

    if (!key) {
      console.error(
        "VITE_STRIPE_PUBLISHABLE_KEY is missing in environment variables.",
      );
    }

    stripePromise = loadStripe(key);
  }
  return stripePromise;
};
