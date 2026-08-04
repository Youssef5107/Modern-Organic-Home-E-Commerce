import { useState, useEffect } from "react";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { getStripe } from "../lib/stripe";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:4003/api";

function InnerForm({ onSuccess, onCancel }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const { error, setupIntent } = await stripe.confirmSetup({
      elements,
      redirect: "if_required",
    });

    if (error) {
      setErrorMessage(error.message || "Something went wrong.");
      setIsSubmitting(false);
      return;
    }

    if (setupIntent && setupIntent.status === "succeeded") {
      onSuccess?.();
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <PaymentElement />

      {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-full border border-outline-variant/30 px-5 py-2.5 font-label-md text-label-md text-primary hover:bg-surface-container transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!stripe || isSubmitting}
          className="rounded-full bg-primary px-5 py-2.5 font-label-md text-label-md text-on-primary hover:opacity-90 active:scale-95 transition-all disabled:opacity-50"
        >
          {isSubmitting ? "Saving..." : "Save Card"}
        </button>
      </div>
    </form>
  );
}

export default function AddPaymentMethodForm({ onSuccess, onCancel }) {
  const [clientSecret, setClientSecret] = useState(null);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    const fetchSetupIntent = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await fetch(
          `${API_BASE_URL}/auth/stripe/create-setup-intent`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to start card setup.");
        }

        setClientSecret(data.clientSecret);
      } catch (error) {
        setLoadError(error.message);
      }
    };

    fetchSetupIntent();
  }, []);

  if (loadError) {
    return <p className="text-sm text-red-600">{loadError}</p>;
  }

  if (!clientSecret) {
    return <p className="text-sm text-on-surface-variant">Loading...</p>;
  }

  return (
    <Elements stripe={getStripe()} options={{ clientSecret }}>
      <InnerForm onSuccess={onSuccess} onCancel={onCancel} />
    </Elements>
  );
}
