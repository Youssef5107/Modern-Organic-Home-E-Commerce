import { useState } from "react";
import { Link } from "react-router-dom";
import AddPaymentMethodForm from "../../components/AddPaymentMethodForm";

export default function PaymentMethods() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="max-w-[1280px] mx-auto px-5 md:px-16 mt-2 animate-page-enter">
      <div className="flex items-center gap-4 py-6">
        <Link to="/profile" className="text-primary">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="font-headline-md text-headline-md text-on-surface">
          Payment Methods
        </h1>
      </div>

      {!showAddForm ? (
        <button
          onClick={() => setShowAddForm(true)}
          className="px-6 py-3 bg-primary text-on-primary rounded-full font-label-md text-label-md hover:opacity-90 transition-opacity"
        >
          + Add Payment Method
        </button>
      ) : (
        <div className="max-w-md bg-surface-container-lowest p-6 rounded-2xl">
          <AddPaymentMethodForm
            onSuccess={() => {
              alert("Card saved successfully!");
              setShowAddForm(false);
            }}
            onCancel={() => setShowAddForm(false)}
          />
        </div>
      )}
    </div>
  );
}
