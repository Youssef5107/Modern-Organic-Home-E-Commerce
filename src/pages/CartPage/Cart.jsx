import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import data from "../../data/products.json";
import {
  toggleAddedProducts,
  incrementQuantity,
  decrementQuantity,
} from "../../features/togglreFavorites/toggleProductsInfoSlice";

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
                      <img
                        className="w-full h-full object-cover"
                        src={product.image_url}
                        alt={product.name}
                      />
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
          {/* <!-- Recently Viewed --> */}
          <div className="mt-stack-lg">
            <h3 className="font-headline-md text-headline-md-mobile text-on-background mb-stack-sm">
              Recently Viewed
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
              {/* <!-- Product 1 --> */}
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3 relative">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="A minimalist solid oak wood stool with elegant curved legs, set against a clean white gallery wall. The wood grain is prominent and natural. Soft ambient shadows provide depth, fitting the quiet luxury and modern organic interior design style."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD79DA7l8EwiZSC63Lmcnm6lofXZdaMSz-A-IgzX8aWzS7SS94pdtiZE59HxKcjUPzBGMWP9fQobOGU3Mj5ZCDNG41MGRJkmH4y7lFylVObUB8iU2Ih-m6kspoALZBsurv3HXoWgakjafItKHxSBjMGfjEAppQmjHRh9iLDp-CzNtJaBVE71xGw3bjWg83YoEeNs41Iaj9Bgn5V75qInmu7kjZKcGSfG79Oq0FxCU1nWZcVqpkTndY"
                  />
                  <div className="absolute top-3 right-3">
                    <button className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">
                        favorite
                      </span>
                    </button>
                  </div>
                </div>
                <h4 className="font-label-md text-on-surface group-hover:text-primary transition-colors">
                  Oak Stool
                </h4>
                <p className="font-label-sm text-on-surface-variant">$185.00</p>
              </div>
              {/* <!-- Product 2 --> */}
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3 relative">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="A high-end minimal abstract painting in earthy shades of beige, charcoal, and ochre, framed in a thin light wood frame. The art is hanging on a textured plaster wall. The lighting is soft and neutral, enhancing the organic feel of the composition."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQErXgpaP5_XfA-JpslfUyt5bQIcTuEFX9S3kse5S3s4S9wAxJyeZvPZCHyeG7PVEN0_ozwyrfU6h-qIjIeCq4EL5LevHyycRul1yQFONygZ6iFl_Di_78bS1hcb8j2eok4dJjGFqxzh6CuqP2bheDsFK_yrtQjItG1BEbSnAV7GoopA7vpADPoCapJNvQDNxS0qhXONfGZ8iVQTkGa9TJs6SgYs8nHmYbAGidBGklWL8C1xRgbbM"
                  />
                  <div className="absolute top-3 right-3">
                    <button className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">
                        favorite
                      </span>
                    </button>
                  </div>
                </div>
                <h4 className="font-label-md text-on-surface group-hover:text-primary transition-colors">
                  Abstract Plaster Art
                </h4>
                <p className="font-label-sm text-on-surface-variant">$240.00</p>
              </div>
              {/* <!-- Product 3 --> */}
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3 relative">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="A set of four handcrafted stoneware plates in a speckled oatmeal glaze, stacked neatly on a rustic wooden table. The plates have slightly irregular, organic edges. The overall mood is warm, inviting, and celebrates artisanal craftsmanship."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWFC-UMdXbEvJQa7Pg4QYYf8iTVi-GESaVAN0ajpAUdKWV1p4xnvbs8B5smVdMb3volEwRECg7_iLWt6WYCB2677DQvJoFr4OOgctOw_rsD0HDwcS6Guz8ueiMOm47-iHqqXLHRyQYr-oJPa1V_RpUQVX6RSOY9x8Sl8ewo-z-W7kehZMI9t5Yj1x6jlXfVyL3prNfqyPARr2WmhpqveeTY74Pp4XvT-JbRk4UujB5XLrV8qmOkxc"
                  />
                  <div className="absolute top-3 right-3">
                    <button className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">
                        favorite
                      </span>
                    </button>
                  </div>
                </div>
                <h4 className="font-label-md text-on-surface group-hover:text-primary transition-colors">
                  Stoneware Set
                </h4>
                <p className="font-label-sm text-on-surface-variant">$72.00</p>
              </div>
              {/* <!-- Product 4 --> */}
              <div className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3 relative">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="A luxurious high-pile wool rug in a cream and charcoal geometric pattern, partially tucked under a minimalist bed frame. The room is light and airy with sheer white curtains. The image captures the soft, inviting texture of the organic wool fibers."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZbJGn3C9s2wyjJvZ9nMFYDOG2lHg6vwGJFjsMYuDXWbw_KTHmpqFX-TjAT3bDgmDOqBMFPjoyIrwhPL_oCOe3_8iohjBUHVuczQuA8WOQEQX-DzAb4OvtLN8clwSDQN_k8PperhpHr-sUFHKFTXsFTPSHQlQfJISJOxt93wckMEVGlj42wj9OwQTKo5vI-HLGObDMsNLdiZc03f4r7bBogz4I0jSBmc0IP5N9Kxo8EhlkoLCVxx4"
                  />
                  <div className="absolute top-3 right-3">
                    <button className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">
                        favorite
                      </span>
                    </button>
                  </div>
                </div>
                <h4 className="font-label-md text-on-surface group-hover:text-primary transition-colors">
                  Nomad Wool Rug
                </h4>
                <p className="font-label-sm text-on-surface-variant">$490.00</p>
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
              to="/cart/checkout"
              className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-md text-lg tracking-wide hover:bg-primary-container transition-all active:scale-[0.98] duration-200 shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
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
