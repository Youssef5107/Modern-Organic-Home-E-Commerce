import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:4003/api";

const brandLabels = {
  visa: "Visa",
  mastercard: "Mastercard",
  amex: "American Express",
  discover: "Discover",
};

export default function Payment() {
  const navigate = useNavigate();
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  // Payment Methods State
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedMethodId, setSelectedMethodId] = useState(null);
  const [loadingMethods, setLoadingMethods] = useState(true);
  const [paymentError, setPaymentError] = useState(null);

  // Billing Address Checkbox State
  const [sameAsShipping, setSameAsShipping] = useState(true);

  // Cart & Pricing State
  const [productsData, setProductsData] = useState([]);
  const [shippingMethod, setShippingMethod] = useState(() => {
    return localStorage.getItem("shippingMethod") || "standard";
  });
  const [loadingCart, setLoadingCart] = useState(true);

  // Redux Cart Data
  const addedIds = useSelector((state) => state.ProductsInfo.addedIds);
  const quantities = useSelector(
    (state) => state.ProductsInfo.quantities || {},
  );

  const token = localStorage.getItem("authToken");

  // Fetch Saved Payment Methods & Shipping Method Preference
  useEffect(() => {
    async function loadPaymentData() {
      if (!token) {
        setLoadingMethods(false);
        return;
      }

      try {
        // Fetch saved cards from Stripe endpoint
        const pmRes = await fetch(`${API_BASE_URL}/stripe/payment-methods`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (pmRes.ok) {
          const pmData = await pmRes.json();
          const methods = pmData.paymentMethods || [];
          setPaymentMethods(methods);

          // Default selection: default method or first item
          const defaultPm = methods.find((m) => m.isDefault) || methods[0];
          if (defaultPm) {
            setSelectedMethodId(defaultPm.id);
          }
        }

        // Fetch user's saved shipping preference
        const shipRes = await fetch(
          `${API_BASE_URL}/addresses/shipping-method`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        if (shipRes.ok) {
          const shipData = await shipRes.json();
          if (shipData?.shippingMethod) {
            setShippingMethod(shipData.shippingMethod);
            localStorage.setItem("shippingMethod", shipData.shippingMethod);
          }
        }
      } catch (err) {
        console.error("Error fetching payment settings:", err);
      } finally {
        setLoadingMethods(false);
      }
    }

    loadPaymentData();
  }, [token]);

  // Fetch Store Products for Dynamic Cart Calculation
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`${API_BASE_URL}/shop/collections`);
        if (res.ok) {
          const result = await res.json();
          const dbProducts = (result.collections || []).flatMap(
            (col) => col.products || [],
          );
          setProductsData(dbProducts);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoadingCart(false);
      }
    }

    fetchProducts();
  }, []);

  // Filter products matching Redux cart IDs
  const addedProducts = productsData.filter((product) =>
    addedIds.includes(product.id),
  );

  // Calculate Prices
  const subtotal = addedProducts.reduce((sum, product) => {
    const qty = quantities[product.id] || 1;
    return sum + (product.price || 0) * qty;
  }, 0);

  // Normalize string comparison cleanly
  const methodClean = String(shippingMethod || "")
    .trim()
    .toLowerCase();
  const isExpress = methodClean.includes("express");

  let shippingFee;
  if (isExpress) {
    shippingFee = 15.0;
  } else {
    shippingFee = subtotal >= 300 || subtotal === 0 ? 0 : 12.5;
  }

  const taxFee = subtotal * 0.08;
  const grandTotal = subtotal + shippingFee + taxFee;

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethods.length === 0) {
      setPaymentError("Please add a payment method to continue.");
      return;
    }
    if (!selectedMethodId) {
      setPaymentError("Please select a payment method.");
      return;
    }

    // Persist temporary payment choice
    localStorage.setItem("selectedPaymentMethodId", selectedMethodId);
    window.scrollTo({ top: 0, behavior: "auto" });
    navigate("/cart/checkout/review");
  };

  return (
    <div className="font-body-md text-body-md min-h-screen flex flex-col bg-[#fbf9f4] text-[#1b1c19] animate-page-enter">
      <main className="flex-grow flex flex-col items-center py-stack-md px-margin-mobile">
        <div className="w-full max-w-2xl">
          {/* Progress Indicator */}
          <nav className="flex items-center justify-center mb-stack-lg overflow-hidden">
            <div className="flex items-center w-full max-w-3xl">
              {/* Step 1: Shipping */}
              <div className="flex flex-col items-center relative z-10">
                <Link
                  to="/cart/checkout/shipment"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "auto" });
                  }}
                  className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-label-md mb-2 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    check
                  </span>
                </Link>
                <span className="font-label-sm text-on-surface-variant">
                  Shipping
                </span>
              </div>

              <div className="flex-1 h-0.5 bg-outline-variant mx-2 -mt-6 relative">
                <div className="absolute inset-0 bg-primary w-full"></div>
              </div>

              {/* Step 2: Payment */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md mb-2 shadow-md transition-transform hover:scale-105">
                  2
                </div>
                <span className="font-label-sm text-primary font-semibold">
                  Payment
                </span>
              </div>

              <div className="flex-1 h-0.5 bg-outline-variant mx-2 -mt-6"></div>

              {/* Step 3: Review */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-md mb-2">
                  3
                </div>
                <span className="font-label-sm text-on-surface-variant">
                  Review
                </span>
              </div>
            </div>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-gutter">
            <section className="space-y-stack-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Saved Payment Methods Section */}
                <div className="checkout-card bg-white p-6 md:p-8 rounded-2xl">
                  <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                    <h2 className="font-headline-md text-headline-md text-on-surface">
                      Payment Method
                    </h2>
                    <Link
                      to="/profile/payment-methods"
                      className="flex items-center gap-1.5 font-label-md text-primary hover:underline"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        add_circle
                      </span>
                      Add / Manage Methods
                    </Link>
                  </div>

                  {loadingMethods ? (
                    <p className="text-on-surface-variant animate-pulse py-4 text-center">
                      Loading saved payment methods...
                    </p>
                  ) : paymentMethods.length === 0 ? (
                    <div className="text-center py-6 space-y-4">
                      <p className="text-on-surface-variant">
                        No saved payment methods found.
                      </p>
                      <Link
                        to="/profile/payment-methods"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:opacity-90 transition-all"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          add
                        </span>
                        Add Payment Method
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {paymentMethods.map((pm) => (
                        <label
                          key={pm.id}
                          onClick={() => {
                            setSelectedMethodId(pm.id);
                            setPaymentError(null);
                          }}
                          className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${
                            selectedMethodId === pm.id
                              ? "border-primary bg-primary-container/10"
                              : "border-outline-variant hover:border-primary"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <input
                              type="radio"
                              name="payment_method"
                              checked={selectedMethodId === pm.id}
                              onChange={() => {}}
                              className="w-5 h-5 text-primary border-outline focus:ring-primary"
                            />
                            <div className="w-10 h-7 bg-surface-container-high rounded flex items-center justify-center">
                              <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                                credit_card
                              </span>
                            </div>
                            <div>
                              <p className="font-label-md text-on-surface">
                                {brandLabels[pm.brand] || pm.brand} ending in{" "}
                                {pm.last4}
                              </p>
                              <p className="font-label-sm text-on-surface-variant">
                                Expires {String(pm.expMonth).padStart(2, "0")}/
                                {pm.expYear}
                              </p>
                            </div>
                          </div>
                          {pm.isDefault && (
                            <span className="text-xs font-label-sm bg-surface-container-high px-2.5 py-1 rounded-full text-on-surface-variant">
                              Default
                            </span>
                          )}
                        </label>
                      ))}
                    </div>
                  )}

                  {paymentError && (
                    <p className="text-sm text-red-600 mt-4">{paymentError}</p>
                  )}

                  <hr className="my-8 border-outline-variant/20" />

                  {/* Billing Address */}
                  <div
                    className="flex items-center space-x-3 cursor-pointer select-none group"
                    onClick={() => setSameAsShipping(!sameAsShipping)}
                  >
                    <div className="relative flex items-center">
                      <input
                        checked={sameAsShipping}
                        onChange={() => {}}
                        className="peer appearance-none w-5 h-5 border-2 border-outline rounded-md checked:bg-primary checked:border-primary transition-all cursor-pointer"
                        id="same_address"
                        type="checkbox"
                      />
                      <span className="material-symbols-outlined absolute text-white text-[16px] pointer-events-none opacity-0 peer-checked:opacity-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        check
                      </span>
                    </div>
                    <label
                      className="font-body-md text-on-surface cursor-pointer"
                      htmlFor="same_address"
                    >
                      Billing address is same as shipping
                    </label>
                  </div>
                </div>

                {/* Dynamic Order Summary Box */}
                <div className="bg-surface-container p-6 rounded-2xl">
                  <div
                    className="flex justify-between items-center cursor-pointer group"
                    onClick={() => setIsSummaryOpen(!isSummaryOpen)}
                  >
                    <h3 className="font-label-md text-label-md">
                      Order Summary
                    </h3>
                    <div className="flex items-center text-primary">
                      <span className="font-label-md mr-1">
                        ${grandTotal.toFixed(2)}
                      </span>
                      <span
                        className={`material-symbols-outlined text-[18px] group-hover:translate-y-0.5 transition-transform ${
                          isSummaryOpen ? "rotate-180" : ""
                        }`}
                      >
                        expand_more
                      </span>
                    </div>
                  </div>

                  {isSummaryOpen && (
                    <div className="space-y-2 pt-4 mt-4 border-t border-outline-variant/30">
                      {loadingCart ? (
                        <p className="text-xs text-on-surface-variant animate-pulse">
                          Calculating totals...
                        </p>
                      ) : (
                        <>
                          <div className="flex justify-between font-label-sm text-on-surface-variant">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between font-label-sm text-on-surface-variant">
                            <span>
                              Shipping ({isExpress ? "Express" : "Standard"})
                            </span>
                            <span>
                              {shippingFee === 0
                                ? "FREE"
                                : `$${shippingFee.toFixed(2)}`}
                            </span>
                          </div>
                          <div className="flex justify-between font-label-sm text-on-surface-variant">
                            <span>Tax (8%)</span>
                            <span>${taxFee.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between font-label-md text-on-surface pt-2 border-t border-outline-variant/20">
                            <span>Total</span>
                            <span>${grandTotal.toFixed(2)}</span>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={paymentMethods.length === 0}
                  className="w-full bg-primary text-white h-14 rounded-full font-label-md text-label-md hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue to Review
                </button>
              </form>

              {/* Footer Security */}
              <div className="flex flex-col items-center space-y-2 py-8">
                <div className="flex items-center space-x-2 text-on-surface-variant/60">
                  <span className="material-symbols-outlined text-[20px]">
                    verified_user
                  </span>
                  <span className="font-label-sm text-label-sm">
                    100% Secure Transaction
                  </span>
                </div>
                <div className="flex space-x-4 opacity-30 grayscale contrast-125">
                  <span className="material-symbols-outlined">payments</span>
                  <span className="material-symbols-outlined">
                    account_balance
                  </span>
                  <span className="material-symbols-outlined">contactless</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
