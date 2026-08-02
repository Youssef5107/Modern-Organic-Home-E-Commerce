export default function Review() {
  return (
    <div className="bg-background text-on-surface font-body-md antialiased grainy-surface min-h-screen flex flex-col animate-page-enter">
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-md md:py-stack-lg flex-grow">
        {/* Progress Indicator matching Shipping and Payment Pages */}
        <nav className="flex items-center justify-center mb-stack-lg overflow-hidden">
          <div className="flex items-center w-full max-w-3xl">
            {/* Step 1: Shipping (Completed) */}
            <div className="flex flex-col items-center relative z-10">
              <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-label-md mb-2 shadow-sm">
                <span className="material-symbols-outlined text-[20px]">
                  check
                </span>
              </div>
              <span className="font-label-sm text-on-surface-variant">
                Shipping
              </span>
            </div>

            {/* Connecting Line (Completed Step 1 -> 2) */}
            <div className="flex-1 h-0.5 bg-outline-variant mx-2 -mt-6 relative">
              <div className="absolute inset-0 bg-primary w-full"></div>
            </div>

            {/* Step 2: Payment (Completed) */}
            <div className="flex flex-col items-center relative z-10">
              <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-label-md mb-2 shadow-sm">
                <span className="material-symbols-outlined text-[20px]">
                  check
                </span>
              </div>
              <span className="font-label-sm text-on-surface-variant">
                Payment
              </span>
            </div>

            {/* Connecting Line (Completed Step 2 -> 3) */}
            <div className="flex-1 h-0.5 bg-outline-variant mx-2 -mt-6 relative">
              <div className="absolute inset-0 bg-primary w-full"></div>
            </div>

            {/* Step 3: Review (Active) */}
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
            {/* Review Header */}
            <section>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2">
                Almost home.
              </h2>
              <p className="text-on-surface-variant font-body-md max-w-lg">
                Please take a final look at your order details before completing
                your purchase. We've curated these items with care for your
                space.
              </p>
            </section>

            {/* Order Summaries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Shipping Summary */}
              <div className="bg-surface-container-low p-6 rounded-xl border border-transparent hover:border-outline-variant/30 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-label-md uppercase tracking-wider text-on-surface-variant">
                    Shipping Address
                  </h3>
                  <button
                    type="button"
                    className="text-primary text-label-sm underline hover:opacity-70 transition-opacity"
                  >
                    Edit
                  </button>
                </div>
                <p className="text-body-md leading-relaxed">
                  Avery Sterling
                  <br />
                  123 Artisan Way
                  <br />
                  Portland, OR 97201
                  <br />
                  United States
                </p>
                <div className="mt-4 flex items-center gap-2 text-on-tertiary-fixed-variant text-label-sm bg-tertiary-fixed/30 w-fit px-3 py-1 rounded-full">
                  <span className="material-symbols-outlined text-[16px]">
                    local_shipping
                  </span>
                  Standard Delivery (3-5 days)
                </div>
              </div>

              {/* Payment Summary */}
              <div className="bg-surface-container-low p-6 rounded-xl border border-transparent hover:border-outline-variant/30 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-label-md uppercase tracking-wider text-on-surface-variant">
                    Payment Method
                  </h3>
                  <button
                    type="button"
                    className="text-primary text-label-sm underline hover:opacity-70 transition-opacity"
                  >
                    Edit
                  </button>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-6 bg-surface-container-highest rounded-sm flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px] text-on-surface-variant">
                      credit_card
                    </span>
                  </div>
                  <p className="text-body-md">Visa ending in 4242</p>
                </div>
                <p className="text-on-surface-variant text-label-sm">
                  Exp: 08/26
                </p>
                <p className="text-on-surface-variant text-label-sm mt-4 italic">
                  Billing address same as shipping
                </p>
              </div>
            </div>

            {/* Order Items */}
            <section className="bg-white rounded-xl p-6 md:p-8 soft-float">
              <h3 className="font-label-md uppercase tracking-wider text-on-surface-variant mb-6">
                Your Curated Items
              </h3>
              <div className="space-y-6 divide-y divide-outline-variant/20">
                {/* Item 1 */}
                <div className="flex gap-6 pt-0">
                  <div className="w-24 h-24 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="A macro photography shot of a handcrafted ceramic vase with a textured matte finish in soft cream..."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8lrxPR-BnEgYp1MqkfqWJSHk7-STA2wmJGxlIYUE-6_7KmC0CxK72A3K3NmBjZTHk6luLtF423Y0x-5NFg68NB4XzoLek2AhMaWud10BRt8vmO2xtsN67wxeB0PxxKPq49Jvr-o9uEUq_AmCNLqA9cfR3qx3TP0kKoLyiy_pc6_neUjdrKIyaOH8RUTWuPeN3mQdSNuvBBF0Euy19qrq7u4q_SCd3e2H3LY1KbsqQq3YCNT0t4M4"
                      alt="Handcrafted Ceramic Vase"
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-between">
                    <div className="flex justify-between">
                      <h4 className="font-body-lg font-medium">
                        Handcrafted Ceramic Vase
                      </h4>
                      <span className="font-body-md text-on-surface">
                        $185.00
                      </span>
                    </div>
                    <p className="text-label-sm text-on-surface-variant">
                      Qty: 1 • Color: Oat
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-6 pt-6">
                  <div className="w-24 h-24 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Close up of a sleek, minimalist brass ritual burner..."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYAYxnqy3azu0j87NuxYN4coOvOlwAhXcgND6j6_mPSwtQdv77xRaAumQAbLDGRekfGooGtqkOxW0ZFgwODQLsTdxzzQVxVK1lqvHmgBly4o_ekmXRidJPsqXzLIUVX94WUUAUwoImx2r78IsVogFNq6gnsAux9rCk1Rwj70nX15HGs7VBD9L9UPGKIayEyEeeR3orClpequ21H9w0hmz8_DJoAamQiIlv8htY5SaR1A-vIvxjDcQ"
                      alt="Ritual Burner"
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-between">
                    <div className="flex justify-between">
                      <h4 className="font-body-lg font-medium">
                        Ritual Burner
                      </h4>
                      <span className="font-body-md text-on-surface">
                        $45.00
                      </span>
                    </div>
                    <p className="text-label-sm text-on-surface-variant">
                      Qty: 1 • Material: Solid Brass
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-6 pt-6">
                  <div className="w-24 h-24 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="A pair of elegant, handle-less sipping cups..."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX1ou7ji2B6bCczTd3u0ZoK6Ts-EbiPSVo7Ybmbo9ZJZEeUf27tW8L5hSJrc2ECwRoA81mDZUtp3GE9EP1Ej_IvC6gEqwrAyvr1FTKQiKLNhoNkBdl5T_-9E6OtU2n4TcO_ELtyonsZMR1pN-ajCyilq_eT3kdlRRWDI0JkSRmzU_2jdbRsverSdZuOf9d2dh6qPtIFwIQP8JVnfnqpGt_oQkIVvABwVqXRg078NIcYuYqLw5w9ik"
                      alt="Sipping Cups"
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-between">
                    <div className="flex justify-between">
                      <h4 className="font-body-lg font-medium">Sipping Cups</h4>
                      <span className="font-body-md text-on-surface">
                        $64.00
                      </span>
                    </div>
                    <p className="text-label-sm text-on-surface-variant">
                      Qty: 1 Pair • Finish: Earth/Sky
                    </p>
                  </div>
                </div>
              </div>
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
                  <span>$294.00</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Shipping</span>
                  <span>$12.00</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Tax</span>
                  <span>$8.50</span>
                </div>
                <div className="pt-4 border-t border-outline-variant flex justify-between items-end">
                  <span className="font-label-md uppercase text-on-surface">
                    Total
                  </span>
                  <span className="font-headline-md text-primary">$314.50</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-primary text-on-primary py-4 rounded-full font-label-md uppercase tracking-widest transition-all duration-300 hover:opacity-90 active:scale-[0.98] shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                <>
                  <span>Place Order</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </>
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

            <div className="mt-8 px-4 text-center">
              <p className="text-label-sm text-on-surface-variant">
                By placing your order, you agree to our{" "}
                <a className="underline" href="#terms">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a className="underline" href="#privacy">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest mt-stack-lg py-stack-md px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="md:col-span-2">
            <h2 className="font-headline-md text-primary mb-4">Sojourn Home</h2>
            <p className="text-body-md text-on-surface-variant max-w-xs mb-6">
              Curated living for the modern home. Sustainable, artisanal, and
              timeless.
            </p>
          </div>
          <div>
            <h3 className="font-label-md uppercase mb-4">Care</h3>
            <ul className="space-y-2 text-on-surface-variant text-body-md">
              <li>
                <a className="hover:text-primary" href="#shipping">
                  Shipping &amp; Returns
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#sustainability">
                  Sustainability
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-label-md uppercase mb-4">Join Us</h3>
            <p className="text-label-sm text-on-surface-variant mb-4">
              Subscribe for slow living inspiration and early access.
            </p>
            <div className="flex border-b border-primary py-2">
              <input
                className="bg-transparent border-none w-full focus:ring-0 text-label-sm p-0"
                placeholder="Email Address"
                type="email"
              />
              <button
                type="button"
                className="material-symbols-outlined text-primary"
              >
                arrow_forward
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-container-max mx-auto mt-stack-md pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4 text-label-sm text-on-surface-variant">
          <p>© 2024 Sojourn Home. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#instagram">Instagram</a>
            <a href="#pinterest">Pinterest</a>
            <a href="#journal">Journal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
