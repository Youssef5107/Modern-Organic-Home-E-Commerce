import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import AddPaymentMethodForm from "../../components/AddPaymentMethodForm";
import { showNotification } from "../../features/toggleProductsInfo/toggleProductsInfoSlice";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://my-e-commerce-website-production.up.railway.app/api";

const brandLabels = {
  visa: "Visa",
  mastercard: "Mastercard",
  amex: "American Express",
  discover: "Discover",
};

export default function PaymentMethods() {
  const dispatch = useDispatch();
  const [showAddForm, setShowAddForm] = useState(false);
  const [isClosingForm, setIsClosingForm] = useState(false);

  const [paymentMethods, setPaymentMethods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [pendingDelete, setPendingDelete] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchPaymentMethods = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(`${API_BASE_URL}/stripe/payment-methods`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to load payment methods.");
      }

      setPaymentMethods(data.paymentMethods);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleOpenForm = () => {
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setIsClosingForm(true);
    // Delayed to match the 400ms CSS exit scale-out animation
    setTimeout(() => {
      setShowAddForm(false);
      setIsClosingForm(false);
    }, 400);
  };

  const openDeleteModal = (data) => {
    setPendingDelete(data);
    requestAnimationFrame(() => setModalVisible(true));
  };

  const closeDeleteModal = () => {
    setModalVisible(false);
    // Delayed to match 400ms backdrop/modal fade-out
    setTimeout(() => setPendingDelete(null), 400);
  };

  const confirmRemove = async () => {
    if (!pendingDelete) return;
    const idToDelete = pendingDelete.id;

    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(
        `${API_BASE_URL}/stripe/payment-methods/${idToDelete}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Unable to remove payment method.");
      }

      dispatch(showNotification("Payment method removed successfully"));
      fetchPaymentMethods();
    } catch (err) {
      setError(err.message);
    } finally {
      closeDeleteModal();
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchPaymentMethods();
    }, 0);

    return () => clearTimeout(timeout);
  }, [fetchPaymentMethods]);

  return (
    <div className="w-full min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center relative overflow-hidden bg-surface text-on-surface font-sans antialiased animate-fade-in -mb-32 pb-32">
      <header className="w-full sticky top-0 bg-background flex items-center justify-between px-margin-mobile py-4 z-40">
        <Link
          to="/profile"
          className="text-on-surface-variant hover:opacity-80 transition-opacity active:scale-95 p-2 -ml-2 rounded-full flex items-center justify-center"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="font-headline-md text-headline-md text-on-surface">
          Payment Methods
        </h1>
        <div className="w-10" />
      </header>

      <main className="flex-grow px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto pt-stack-sm pb-32">
        <div className="flex flex-col gap-stack-lg max-w-2xl mx-auto mt-stack-md">
          <section className="flex flex-col gap-stack-sm">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">
              Saved Cards
            </h2>

            {isLoading && (
              <p className="text-on-surface-variant animate-pulse">
                Loading payment methods...
              </p>
            )}

            {error && <p className="text-red-600 animate-fade-in">{error}</p>}

            {!isLoading && paymentMethods.length === 0 && !error && (
              <p className="text-on-surface-variant animate-fade-in">
                You haven't saved any payment methods yet.
              </p>
            )}

            {!isLoading &&
              paymentMethods.map((pm, index) => (
                <div key={pm.id} className="animate-fade-in">
                  <div className="group relative flex items-center justify-between p-4 bg-surface rounded-xl border border-transparent shadow-[0_4px_24px_rgba(111,52,41,0.03)] hover:shadow-[0_8px_32px_rgba(111,52,41,0.06)] transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-8 bg-surface-container-high rounded flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-surface-variant">
                          credit_card
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-body-md text-body-md text-on-surface">
                          {brandLabels[pm.brand] || pm.brand} ending in{" "}
                          {pm.last4}
                        </span>
                        <span className="font-body-md text-on-surface-variant text-sm">
                          Expires {String(pm.expMonth).padStart(2, "0")}/
                          {pm.expYear}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        openDeleteModal({
                          id: pm.id,
                          label: `${brandLabels[pm.brand] || pm.brand} ending in ${pm.last4}`,
                        })
                      }
                      aria-label="Remove payment method"
                      className="text-on-surface-variant hover:text-error transition-colors p-2 rounded-full opacity-0 group-hover:opacity-100 focus:opacity-100 active:scale-90"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        delete
                      </span>
                    </button>
                  </div>
                  {index < paymentMethods.length - 1 && (
                    <div className="h-px bg-surface-variant w-full my-2" />
                  )}
                </div>
              ))}
          </section>

          <section className="mt-4">
            {!showAddForm ? (
              <button
                onClick={handleOpenForm}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 border border-dashed border-outline-variant rounded-xl text-primary font-label-md text-label-md hover:bg-primary-fixed/30 hover:border-primary-container active:scale-[0.98] transition-all duration-300 animate-fade-in"
              >
                <span className="material-symbols-outlined">add_circle</span>
                Add New Payment Method
              </button>
            ) : (
              <div
                className={`bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm transition-all duration-500 ${
                  isClosingForm ? "animate-scale-out" : "animate-scale-in"
                }`}
              >
                <AddPaymentMethodForm
                  onSuccess={() => {
                    handleCloseForm();
                    dispatch(
                      showNotification("Payment method added successfully"),
                    );
                    fetchPaymentMethods();
                  }}
                  onCancel={handleCloseForm}
                />
              </div>
            )}
          </section>
        </div>
      </main>

      {pendingDelete && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-on-background/20 backdrop-blur-sm p-margin-mobile transition-all duration-500 ${
            modalVisible
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeDeleteModal();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className={`bg-surface-container-lowest w-full max-w-md rounded-xl shadow-2xl shadow-primary/10 overflow-hidden transition-all duration-500 ${
              modalVisible ? "animate-scale-in" : "animate-scale-out"
            }`}
          >
            <div className="p-8 md:p-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-error-container/30 flex items-center justify-center mb-6 text-error animate-check-pop">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "32px" }}
                >
                  delete_outline
                </span>
              </div>

              <h2
                id="modal-title"
                className="font-headline-md text-headline-md text-on-surface mb-3"
              >
                Remove Payment Method?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Are you sure you want to remove this payment method? This action
                cannot be undone.
              </p>

              <div className="bg-surface-container-low w-full rounded-lg py-3 px-4 flex items-center justify-center gap-3 mb-8 border border-outline-variant/20">
                <span
                  className="material-symbols-outlined text-on-surface-variant"
                  style={{ fontSize: "20px" }}
                >
                  credit_card
                </span>
                <span className="font-label-md text-label-md text-on-surface">
                  {pendingDelete.label}
                </span>
              </div>

              <div className="flex flex-col w-full gap-3 mt-auto">
                <button
                  onClick={confirmRemove}
                  className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-4 rounded-full transition-all duration-300 hover:bg-primary hover:text-on-primary active:scale-[0.96] shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Remove</span>
                </button>
                <button
                  onClick={closeDeleteModal}
                  className="w-full bg-transparent text-on-surface-variant font-label-md text-label-md py-4 rounded-full transition-colors duration-300 hover:bg-surface-container hover:text-on-surface border border-transparent hover:border-outline-variant/30 active:scale-[0.96]"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
