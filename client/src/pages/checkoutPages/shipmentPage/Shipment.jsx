import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShippingAddresses from "../../shippingAddressesPage/ShippingAddresses";
import { fetchWithLoading } from "../../../lib/fetchWithLoading";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://my-e-commerce-website-production.up.railway.app/api";

export default function Shipment() {
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [shippingMethod, setShippingMethod] = useState(() => {
    return localStorage.getItem("shippingMethod") || "standard";
  });

  const addedIds = useSelector((state) => state.ProductsInfo.addedIds);
  const quantities = useSelector(
    (state) => state.ProductsInfo.quantities || {},
  );

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    async function initData() {
      try {
        if (token) {
          const shipRes = await fetchWithLoading(
            `${API_BASE_URL}/addresses/shipping-method`,
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          );
          if (shipRes.ok) {
            const shipData = await shipRes.json();
            if (shipData.shippingMethod) {
              setShippingMethod(shipData.shippingMethod);
              localStorage.setItem("shippingMethod", shipData.shippingMethod);
            }
          }
        }

        const prodRes = await fetchWithLoading(`${API_BASE_URL}/shop/collections`);
        if (prodRes.ok) {
          const result = await prodRes.json();
          const dbProducts = (result.collections || []).flatMap(
            (col) => col.products || [],
          );
          setProductsData(dbProducts);
        }
      } catch (error) {
        console.error("Error initializing shipment data:", error);
      } finally {
        setLoading(false);
      }
    }

    initData();
  }, [token]);

  const addedProducts = productsData.filter((product) =>
    addedIds.includes(product.id),
  );

  const subtotal = addedProducts.reduce((sum, product) => {
    const qty = quantities[product.id] || 1;
    return sum + (product.price || 0) * qty;
  }, 0);

  let shippingFee = 0;
  if (shippingMethod === "express") {
    shippingFee = 15.0;
  } else if (shippingMethod === "standard") {
    shippingFee = subtotal >= 300 || subtotal === 0 ? 0 : 12.5;
  }

  const taxFee = subtotal * 0.08;
  const grandTotal = subtotal + shippingFee + taxFee;

  const handleShippingChange = async (method) => {
    if (shippingMethod === method) return;

    setShippingMethod(method);
    localStorage.setItem("shippingMethod", method);

    if (token) {
      try {
        await fetchWithLoading(`${API_BASE_URL}/addresses/shipping-method`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ shippingMethod: method }),
        });
      } catch (err) {
        console.error("Failed to persist shipping method:", err);
      }
    }
  };

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-md md:py-stack-lg animate-page-enter relative pb-28">
      {/* Progress Stepper */}
      <nav className="flex items-center justify-center mb-stack-lg overflow-hidden">
        <div className="flex items-center w-full max-w-3xl">
          <div className="flex flex-col items-center relative z-10">
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md mb-2 shadow-md transition-transform hover:scale-105">
              1
            </div>
            <span className="font-label-sm text-primary">Shipping</span>
          </div>
          <div className="flex-1 h-0.5 bg-outline-variant mx-2 -mt-6 relative">
            <div className="absolute inset-0 bg-primary w-1/2"></div>
          </div>

          <div className="flex flex-col items-center relative z-10">
            <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-md mb-2">
              2
            </div>
            <span className="font-label-sm text-on-surface-variant">
              Payment
            </span>
          </div>
          <div className="flex-1 h-0.5 bg-outline-variant mx-2 -mt-6"></div>

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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-stack-md">
          <section className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm reveal-on-scroll">
            <div className="flex items-center justify-between mb-stack-sm flex-wrap gap-2">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Shipping Address
              </h2>
              <Link
                to="/profile/shipping-addresses"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "auto" });
                }}
                className="flex items-center gap-1.5 font-label-md text-primary hover:underline"
              >
                <span className="material-symbols-outlined text-[18px]">
                  add_location
                </span>
                Add / Manage Address
              </Link>
            </div>

            <ShippingAddresses
              selectedAddressId={selectedAddressId}
              onSelectAddress={(id) => setSelectedAddressId(id)}
            />
          </section>

          {/* Shipping Methods */}
          <section className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm reveal-on-scroll">
            <h2 className="font-headline-md text-headline-md mb-stack-sm text-on-surface">
              Shipping Method
            </h2>
            <div className="space-y-3">
              <label
                onClick={() => handleShippingChange("standard")}
                className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${
                  shippingMethod === "standard"
                    ? "border-primary bg-primary-container/10"
                    : "border-outline-variant hover:border-primary"
                }`}
              >
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    name="shipping"
                    checked={shippingMethod === "standard"}
                    onChange={() => {}}
                    className="w-5 h-5 text-primary border-outline focus:ring-primary"
                  />
                  <div>
                    <p className="font-label-md text-on-surface">
                      Standard Ground
                    </p>
                    <p className="font-label-sm text-on-surface-variant">
                      3-5 business days
                    </p>
                  </div>
                </div>
                <span className="font-label-md text-on-surface">
                  {subtotal >= 300 || subtotal === 0 ? "FREE" : "$12.50"}
                </span>
              </label>

              <label
                onClick={() => handleShippingChange("express")}
                className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${
                  shippingMethod === "express"
                    ? "border-primary bg-primary-container/10"
                    : "border-outline-variant hover:border-primary"
                }`}
              >
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    name="shipping"
                    checked={shippingMethod === "express"}
                    onChange={() => {}}
                    className="w-5 h-5 text-primary border-outline focus:ring-primary"
                  />
                  <div>
                    <p className="font-label-md text-on-surface">
                      Express Delivery
                    </p>
                    <p className="font-label-sm text-on-surface-variant">
                      1-2 business days
                    </p>
                  </div>
                </div>
                <span className="font-label-md text-on-surface">$15.00</span>
              </label>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <aside className="lg:col-span-5">
          <div className="sticky top-24 bg-surface-container-low p-6 md:p-8 rounded-2xl shadow-[0_4px_24px_rgba(111,52,41,0.04)]">
            <h2 className="font-headline-md text-headline-md mb-6 text-on-surface border-b border-outline-variant pb-4">
              Order Summary
            </h2>

            <div className="space-y-4 mb-8 max-h-64 overflow-y-auto custom-scrollbar pr-2">
              {loading ? (
                <p className="font-body-md text-on-surface-variant text-center py-4">
                  Loading order items...
                </p>
              ) : addedProducts.length === 0 ? (
                <p className="font-body-md text-on-surface-variant text-center py-4">
                  Your cart is empty.
                </p>
              ) : (
                addedProducts.map((product) => {
                  const qty = quantities[product.id] || 1;
                  const itemPrice = (product.price * qty).toFixed(2);

                  return (
                    <div key={product.id} className="flex gap-4">
                      <div className="w-20 h-20 bg-white rounded-lg flex-shrink-0 overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          alt={product.name}
                          src={product.image_url}
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <h4 className="font-label-md text-on-surface leading-tight">
                            {product.name}
                          </h4>
                          {product.series && (
                            <p className="font-label-sm text-on-surface-variant">
                              Series: {product.series}
                            </p>
                          )}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-label-sm text-on-surface-variant">
                            Qty: {qty}
                          </span>
                          <span className="font-label-md text-on-surface">
                            ${itemPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="space-y-3 border-t border-outline-variant pt-6 mb-8">
              <div className="flex justify-between font-label-md text-on-surface-variant">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-label-md text-on-surface-variant">
                <span>
                  Shipping (
                  {shippingMethod === "express" ? "Express" : "Standard"})
                </span>
                <span className="text-secondary font-medium">
                  {shippingFee === 0 ? "FREE" : `$${shippingFee.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between font-label-md text-on-surface-variant">
                <span>Estimated Tax (8%)</span>
                <span>${taxFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-headline-md text-on-surface pt-2 border-t border-outline-variant/50">
                <span>Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-4">
              <Link
                to={"/cart/checkout/payment"}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "auto" });
                }}
              >
                <button
                  disabled={addedProducts.length === 0}
                  className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-md shadow-lg shadow-primary/20 hover:bg-primary-container transition-all active:scale-[0.98] duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue to Payment
                </button>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}