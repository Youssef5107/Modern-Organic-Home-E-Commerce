import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import data from "../../data/products.json";
import {
  toggleAddedProducts,
  incrementQuantity,
  decrementQuantity,
  viewCardDetails,
} from "../../features/toggleProductsInfo/toggleProductsInfoSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const addedIds = useSelector((state) => state.ProductsInfo.addedIds);
  const quantities = useSelector(
    (state) => state.ProductsInfo.quantities || {},
  );

  const allProducts = data.collections.flatMap((col) => col.products || []);
  const addedProducts = allProducts.filter((product) =>
    addedIds.includes(product.id),
  );

  const totalItemCount = addedProducts.reduce((sum, product) => {
    return sum + (quantities[product.id] || 1);
  }, 0);

  const subtotal = addedProducts.reduce((sum, product) => {
    const qty = quantities[product.id] || 1;
    return sum + product.price * qty;
  }, 0);

  const shipping = subtotal > 300 || subtotal === 0 ? 0 : 12.5;
  const tax = subtotal * 0.08;
  const grandTotal = subtotal + shipping + tax;

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-stack-md pb-32 reveal-on-scroll animate-page-enter">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-gutter">
        {/* Shopping Cart List */}
        <section className="lg:col-span-8 flex flex-col gap-stack-md reveal-on-scroll">
          <div className="flex items-baseline justify-between border-b border-outline-variant pb-base">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">
              Your Basket{" "}
              <span className="font-body-md text-on-surface-variant font-normal">
                ({totalItemCount} {totalItemCount === 1 ? "Item" : "Items"})
              </span>
            </h2>
          </div>

          {/* Cart Items */}
          <div className="flex flex-col gap-stack-sm">
            {addedProducts.length === 0 ? (
              <div className="text-center py-12 bg-surface-container-lowest rounded-xl">
                <p className="font-body-md text-on-surface-variant mb-4">
                  Your cart is empty.
                </p>
                <Link
                  to="/shop"
                  className="inline-block bg-primary text-on-primary px-6 py-2 rounded-full font-label-md"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "auto" });
                  }}
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              addedProducts.map((product) => {
                const itemQty = quantities[product.id] || 1;
                const itemTotalPrice = (product.price * itemQty).toFixed(2);

                return (
                  <div
                    key={product.id}
                    className="flex flex-col sm:flex-row gap-base md:gap-stack-sm bg-surface-container-lowest p-4 rounded-xl organic-shadow group transition-all duration-300"
                  >
                    <div className="w-full sm:w-32 h-40 flex-shrink-0 bg-surface-container rounded-lg overflow-hidden relative border border-surface-variant/20">
                      <Link
                        to={`/cart/card-details-view#${product.name}`}
                        className="product-card group"
                        onClick={() => {
                          dispatch(viewCardDetails(product.id));
                          window.scrollTo({ top: 0, behavior: "auto" });
                        }}
                      >
                        <img
                          className="product-image w-full h-full object-cover transition-transform duration-700 ease-out"
                          alt={product.name}
                          src={product.image_url}
                        />
                      </Link>
                    </div>
                    <div className="flex-grow flex flex-col justify-between py-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-label-md text-label-md text-on-surface">
                            {product.name}
                          </h3>
                          <p className="font-label-sm text-label-sm text-on-surface-variant mt-1 uppercase tracking-wider">
                            SKU: {product.id}
                          </p>
                          <div className="flex flex-wrap gap-4 mt-3">
                            <div className="flex items-center gap-1.5">
                              <span className="font-label-sm text-label-sm text-on-surface-variant">
                                Series:
                              </span>
                              <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                                {product.series}
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className="font-headline-md text-primary">
                          {data.currency}
                          {itemTotalPrice}
                        </span>
                      </div>

                      {/* Quantity Controls & Remove */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center bg-surface-container rounded-full border border-outline-variant">
                          <button
                            onClick={() =>
                              dispatch(decrementQuantity(product.id))
                            }
                            className="p-2 hover:text-primary transition-colors active:scale-90"
                            aria-label="Decrease quantity"
                          >
                            <span className="material-symbols-outlined text-[20px]">
                              remove
                            </span>
                          </button>
                          <span className="px-3 font-label-md text-on-surface">
                            {itemQty}
                          </span>
                          <button
                            onClick={() =>
                              dispatch(incrementQuantity(product.id))
                            }
                            className="p-2 hover:text-primary transition-colors active:scale-90"
                            aria-label="Increase quantity"
                          >
                            <span className="material-symbols-outlined text-[20px]">
                              add
                            </span>
                          </button>
                        </div>

                        <button
                          className="flex items-center gap-1 text-on-surface-variant hover:text-error transition-colors font-label-sm"
                          onClick={() =>
                            dispatch(toggleAddedProducts(product.id))
                          }
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            delete
                          </span>
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="grid grid-cols-12 gap-4 h-[250px]">
            <div className="col-span-7 h-full rounded-2xl overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Potter's hands working with clay"
              />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="font-label-sm uppercase tracking-widest opacity-80">
                  The Process
                </span>
              </div>
            </div>

            <div className="col-span-5 flex flex-col gap-4 h-full">
              <div className="h-1/2 rounded-2xl overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Raw clay textures"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <div className="h-1/2 rounded-2xl overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Curated vessels"
                />
                <div className="absolute bottom-4 right-4">
                  <span className="font-label-sm text-on-surface-variant bg-surface-container-lowest/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    Curated Form
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Order Summary */}
        <aside className="lg:col-span-4 mt-stack-lg lg:mt-0">
          <div className="sticky top-24 bg-surface-container p-6 md:p-8 rounded-2xl organic-shadow">
            <h3 className="font-headline-md text-headline-md-mobile text-on-background mb-6">
              Order Summary
            </h3>
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="font-body-md text-on-surface-variant">
                  Subtotal
                </span>
                <span className="font-label-md text-on-surface">
                  {data.currency}
                  {subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-body-md text-on-surface-variant">
                  Estimated Shipping
                </span>
                <span className="font-label-md text-on-surface">
                  {shipping === 0
                    ? "FREE"
                    : `${data.currency}${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-body-md text-on-surface-variant">
                  Tax (8%)
                </span>
                <span className="font-label-md text-on-surface">
                  {data.currency}
                  {tax.toFixed(2)}
                </span>
              </div>
              <div className="pt-4 mt-2 border-t border-outline-variant flex justify-between items-center">
                <span className="font-label-md text-on-surface uppercase tracking-widest text-lg">
                  Total
                </span>
                <span className="font-headline-md text-primary">
                  {data.currency}
                  {grandTotal.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="mb-8">
              <label className="font-label-sm text-on-surface-variant block mb-2">
                PROMO CODE
              </label>
              <div className="flex gap-2">
                <input
                  className="flex-grow bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/40"
                  placeholder="Enter code"
                  type="text"
                />
                <button className="bg-secondary-container text-on-secondary-container px-4 py-2 rounded-lg font-label-md hover:opacity-90 transition-opacity">
                  Apply
                </button>
              </div>
            </div>
            <Link
              to="/cart/checkout/shipment"
              className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-md text-lg tracking-wide hover:bg-primary-container transition-all active:scale-[0.98] duration-200 shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "auto" });
              }}
            >
              Checkout Now
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            {/* <!-- Trust Badges --> */}
            <div className="mt-8 pt-8 border-t border-outline-variant">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-secondary-container bg-secondary-container p-1.5 rounded-full text-lg">
                    local_shipping
                  </span>
                  <span className="font-label-sm text-on-surface-variant">
                    Free carbon-neutral shipping on orders over $300
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-secondary-container bg-secondary-container p-1.5 rounded-full text-lg">
                    lock
                  </span>
                  <span className="font-label-sm text-on-surface-variant">
                    Secure, encrypted checkout &amp; flexible payment options
                  </span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
