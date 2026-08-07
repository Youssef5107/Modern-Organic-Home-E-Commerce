import { useState, useEffect } from "react";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { getStripe } from "../lib/stripe";
import { fetchWithLoading } from "../lib/fetchWithLoading";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://my-e-commerce-website-production.up.railway.app/api";

function InnerForm({ onSuccess, onCancel }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleCancel = () => {
    setIsExiting(true);
    setTimeout(() => {
      onCancel?.();
    }, 400);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

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
      setIsSuccess(true);
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          onSuccess?.();
        }, 400);
      }, 1500);
      return;
    }

    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div
        className={`flex flex-col items-center justify-center py-8 gap-3 ${
          isExiting ? "animate-fade-out" : "animate-fade-in"
        }`}
      >
        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center animate-check-pop shadow-md">
          <span className="material-symbols-outlined text-on-primary text-[28px]">
            check
          </span>
        </div>
        <p className="font-label-md text-label-md text-on-surface animate-fade-in">
          Card saved successfully!
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-5 ${
        isExiting ? "animate-fade-out" : "animate-fade-in"
      }`}
    >
      <PaymentElement />

      {errorMessage && (
        <p className="text-sm text-red-600 animate-fade-in">{errorMessage}</p>
      )}

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={handleCancel}
          className="rounded-full border border-outline-variant/30 px-5 py-2.5 font-label-md text-label-md text-primary hover:bg-surface-container active:scale-95 transition-all duration-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!stripe || isSubmitting}
          className="rounded-full bg-primary px-5 py-2.5 font-label-md text-label-md text-on-primary hover:opacity-90 active:scale-95 transition-all duration-300 disabled:opacity-50 shadow-sm"
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
        const response = await fetchWithLoading(
          `${API_BASE_URL}/stripe/create-setup-intent`,
          {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
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
    return <p className="text-sm text-red-600 animate-fade-in">{loadError}</p>;
  }

  if (!clientSecret) {
    return (
      <div className="py-6 flex items-center justify-center gap-2 text-on-surface-variant animate-pulse">
        <span className="material-symbols-outlined animate-spin">sync</span>
        <span className="text-sm">Loading payment options...</span>
      </div>
    );
  }

  return (
    <Elements stripe={getStripe()} options={{ clientSecret }}>
      <InnerForm onSuccess={onSuccess} onCancel={onCancel} />
    </Elements>
  );
}
