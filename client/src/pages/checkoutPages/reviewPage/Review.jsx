import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://my-e-commerce-website-production.up.railway.app/api";

const brandLabels = {
  visa: "Visa",
  mastercard: "Mastercard",
  amex: "American Express",
  discover: "Discover",
};

export default function Review() {
  const navigate = useNavigate();

  // State
  const [shippingAddress, setShippingAddress] = useState(null);
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [productsData, setProductsData] = useState([]);
  const [orderNotes, setOrderNotes] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Redux Cart Data
  const addedIds = useSelector((state) => state.ProductsInfo.addedIds);
  const quantities = useSelector(
    (state) => state.ProductsInfo.quantities || {},
  );

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    async function fetchReviewData() {
      try {
        if (!token) return;

        // 1. Fetch Shipping Addresses & Selected/Default Address
        const addrRes = await fetch(`${API_BASE_URL}/addresses`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (addrRes.ok) {
          const addrData = await addrRes.json();
          const addresses = addrData.addresses || [];
          const defaultAddr =
            addresses.find((a) => a.isDefault) || addresses[0];
          setShippingAddress(defaultAddr || null);
        }

        // 2. Fetch User's Selected Shipping Method
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
          }
        }

        // 3. Fetch Selected Payment Method from Stripe
        const pmRes = await fetch(`${API_BASE_URL}/stripe/payment-methods`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (pmRes.ok) {
          const pmData = await pmRes.json();
          const methods = pmData.paymentMethods || [];
          const savedPmId = localStorage.getItem("selectedPaymentMethodId");
          const selectedPm =
            methods.find((m) => m.id === savedPmId) ||
            methods.find((m) => m.isDefault) ||
            methods[0];
          setPaymentMethod(selectedPm || null);
        }

        // 4. Fetch Products for Order Items
        const prodRes = await fetch(`${API_BASE_URL}/shop/collections`);
        if (prodRes.ok) {
          const result = await prodRes.json();
          const dbProducts = (result.collections || []).flatMap(
            (col) => col.products || [],
          );
          setProductsData(dbProducts);
        }
      } catch (err) {
        console.error("Error loading order review data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchReviewData();
  }, [token]);

  const addedProducts = productsData.filter((product) =>
    addedIds.includes(product.id),
  );

  const subtotal = addedProducts.reduce((sum, product) => {
    const qty = quantities[product.id] || 1;
    return sum + (product.price || 0) * qty;
  }, 0);

  const isExpress = String(shippingMethod || "")
    .toLowerCase()
    .includes("express");
  let shippingFee;
  if (isExpress) {
    shippingFee = 15.0;
  } else {
    shippingFee = subtotal >= 300 || subtotal === 0 ? 0 : 12.5;
  }

  const taxFee = subtotal * 0.08;
  const grandTotal = subtotal + shippingFee + taxFee;

  const handlePlaceOrder = async () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      navigate("/order-confirmation");
    }, 1200);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-on-surface">
        <p className="animate-pulse font-label-md">Loading review details...</p>
      </div>
    );
  }

  return (
    <div className="bg-background text-on-surface font-body-md antialiased grainy-surface min-h-screen flex flex-col animate-page-enter">
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-md md:py-stack-lg flex-grow">
        {/* Progress Indicator */}
        <nav className="flex items-center justify-center mb-stack-lg overflow-hidden">
          <div className="flex items-center w-full max-w-3xl">
            {/* Step 1: Shipping */}
            <div className="flex flex-col items-center relative z-10">
              <Link
                to="/cart/checkout/shipment"
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
              <Link
                to="/cart/checkout/payment"
                className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-label-md mb-2 shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">
                  check
                </span>
              </Link>
              <span className="font-label-sm text-on-surface-variant">
                Payment
              </span>
            </div>

            <div className="flex-1 h-0.5 bg-outline-variant mx-2 -mt-6 relative">
              <div className="absolute inset-0 bg-primary w-full"></div>
            </div>

            {/* Step 3: Review */}
            <div className="flex flex-col items-center relative z-10">
              <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md mb-2 shadow-md transition-transform hover:scale-105">
                3
              </div>
              <span className="font-label-sm text-primary font-semibold">
                Review
              </span>
            </div>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left Column: Order Details */}
          <div className="lg:col-span-8 space-y-stack-md">
            <section>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2">
                Almost home.
              </h2>
              <p className="text-on-surface-variant font-body-md max-w-lg">
                Please take a final look at your order details before completing
                your purchase.
              </p>
            </section>

            {/* Shipping & Payment Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Shipping Summary */}
              <div className="bg-surface-container-low p-6 rounded-xl border border-transparent hover:border-outline-variant/30 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-label-md uppercase tracking-wider text-on-surface-variant">
                    Shipping Address
                  </h3>
                  <Link
                    to="/cart/checkout/shipment"
                    className="text-primary text-label-sm underline hover:opacity-70 transition-opacity"
                  >
                    Edit
                  </Link>
                </div>

                {shippingAddress ? (
                  <p className="text-body-md leading-relaxed">
                    {shippingAddress.fullName}
                    <br />
                    {shippingAddress.street}
                    <br />
                    {shippingAddress.city}, {shippingAddress.state}{" "}
                    {shippingAddress.postalCode}
                  </p>
                ) : (
                  <p className="text-body-md text-on-surface-variant italic">
                    No address selected
                  </p>
                )}

                <div className="mt-4 flex items-center gap-2 text-on-tertiary-fixed-variant text-label-sm bg-tertiary-fixed/30 w-fit px-3 py-1 rounded-full">
                  <span className="material-symbols-outlined text-[16px]">
                    local_shipping
                  </span>
                  {isExpress
                    ? "Express Delivery (1-2 days)"
                    : "Standard Ground (3-5 days)"}
                </div>
              </div>

              {/* Payment Summary */}
              <div className="bg-surface-container-low p-6 rounded-xl border border-transparent hover:border-outline-variant/30 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-label-md uppercase tracking-wider text-on-surface-variant">
                    Payment Method
                  </h3>
                  <Link
                    to="/cart/checkout/payment"
                    className="text-primary text-label-sm underline hover:opacity-70 transition-opacity"
                  >
                    Edit
                  </Link>
                </div>

                {paymentMethod ? (
                  <>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-6 bg-surface-container-highest rounded-sm flex items-center justify-center">
                        <span className="material-symbols-outlined text-[20px] text-on-surface-variant">
                          credit_card
                        </span>
                      </div>
                      <p className="text-body-md">
                        {brandLabels[paymentMethod.brand] ||
                          paymentMethod.brand}{" "}
                        ending in {paymentMethod.last4}
                      </p>
                    </div>
                    <p className="text-on-surface-variant text-label-sm">
                      Exp: {String(paymentMethod.expMonth).padStart(2, "0")}/
                      {paymentMethod.expYear}
                    </p>
                  </>
                ) : (
                  <p className="text-body-md text-on-surface-variant italic">
                    No payment method selected
                  </p>
                )}

                <p className="text-on-surface-variant text-label-sm mt-4 italic">
                  Billing address same as shipping
                </p>
              </div>
            </div>

            {/* Dynamic Items */}
            <section className="bg-white rounded-xl p-6 md:p-8 soft-float">
              <h3 className="font-label-md uppercase tracking-wider text-on-surface-variant mb-6">
                Your Curated Items
              </h3>
              {addedProducts.length === 0 ? (
                <p className="text-on-surface-variant py-4 text-center">
                  Your cart is empty.
                </p>
              ) : (
                <div className="space-y-6 divide-y divide-outline-variant/20">
                  {addedProducts.map((product, idx) => {
                    const qty = quantities[product.id] || 1;
                    const itemTotal = (product.price * qty).toFixed(2);

                    return (
                      <div
                        key={product.id}
                        className={`flex gap-6 ${idx === 0 ? "pt-0" : "pt-6"}`}
                      >
                        <div className="w-24 h-24 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            className="w-full h-full object-cover"
                            src={product.image_url}
                            alt={product.name}
                          />
                        </div>
                        <div className="flex-grow flex flex-col justify-between">
                          <div className="flex justify-between">
                            <h4 className="font-body-lg font-medium">
                              {product.name}
                            </h4>
                            <span className="font-body-md text-on-surface">
                              ${itemTotal}
                            </span>
                          </div>
                          <p className="text-label-sm text-on-surface-variant">
                            Qty: {qty}
                            {product.material &&
                              ` • Material: ${product.material}`}
                            {product.glaze && ` • Glaze: ${product.glaze}`}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>

            {/* Order Notes */}
            <section>
              <label
                className="block font-label-md uppercase tracking-wider text-on-surface-variant mb-3"
                htmlFor="order-notes"
              >
                Order Notes or Gift Message
              </label>
              <textarea
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
                className="w-full bg-surface-container border-none rounded-xl focus:ring-1 focus:ring-primary text-body-md p-4 placeholder-on-surface-variant/40"
                id="order-notes"
                placeholder="Add a message for a loved one or any special delivery requests..."
                rows="4"
              />
            </section>
          </div>

          {/* Right Column: Checkout Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-surface-container-high p-8 rounded-2xl space-y-6">
              <h3 className="font-headline-md text-on-surface">
                Order Summary
              </h3>
              <div className="space-y-4 text-body-md">
                <div className="flex justify-between text-on-surface-variant">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Shipping ({isExpress ? "Express" : "Standard"})</span>
                  <span>
                    {shippingFee === 0 ? "FREE" : `$${shippingFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Estimated Tax (8%)</span>
                  <span>${taxFee.toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t border-outline-variant flex justify-between items-end">
                  <span className="font-label-md uppercase text-on-surface">
                    Total
                  </span>
                  <span className="font-headline-md text-primary">
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handlePlaceOrder}
                disabled={submitting || addedProducts.length === 0}
                className="w-full bg-primary text-on-primary py-4 rounded-full font-label-md uppercase tracking-widest transition-all duration-300 hover:opacity-90 active:scale-[0.98] shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>{submitting ? "Placing Order..." : "Place Order"}</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>

              <div className="pt-4 text-center">
                <p className="text-label-sm text-on-surface-variant flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    lock
                  </span>
                  Secure encrypted checkout
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-outline-variant/30">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">
                    eco
                  </span>
                  <div>
                    <p className="font-label-md text-on-surface">
                      Carbon-Neutral Shipping
                    </p>
                    <p className="text-label-sm text-on-surface-variant">
                      Every purchase plants a tree in a reforestation project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
