import { useState } from "react";

export default function Payment() {
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  return (
    <div className="font-body-md text-body-md min-h-screen flex flex-col bg-[#fbf9f4] text-[#1b1c19] animate-page-enter">
      <main className="flex-grow flex flex-col items-center py-stack-md px-margin-mobile">
        <div className="w-full max-w-2xl">
          {/* Progress Indicator matching Shipping Page size & layout */}
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

              {/* Step 2: Payment (Active) */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md mb-2 shadow-md transition-transform hover:scale-105">
                  2
                </div>
                <span className="font-label-sm text-primary font-semibold">
                  Payment
                </span>
              </div>

              {/* Connecting Line (Step 2 -> 3) */}
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
            {/* Main Content Column */}
            <section className="space-y-stack-md">
              {/* Payment Form */}
              <form className="space-y-6">
                <div className="checkout-card bg-white p-6 md:p-8 rounded-2xl">
                  <h2 className="font-headline-md text-headline-md mb-6">
                    Payment Method
                  </h2>
                  <div className="space-y-4">
                    {/* Card Number */}
                    <div className="space-y-2">
                      <label
                        className="font-label-sm text-label-sm text-on-surface-variant"
                        htmlFor="card_number"
                      >
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          className="w-full h-12 px-4 bg-surface-dim/30 border-none rounded-lg text-body-md placeholder:text-outline-variant"
                          id="card_number"
                          placeholder="0000 0000 0000 0000"
                          type="text"
                        />
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
                          credit_card
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* Expiry */}
                      <div className="space-y-2">
                        <label
                          className="font-label-sm text-label-sm text-on-surface-variant"
                          htmlFor="expiry"
                        >
                          Expiry Date
                        </label>
                        <input
                          className="w-full h-12 px-4 bg-surface-dim/30 border-none rounded-lg text-body-md placeholder:text-outline-variant"
                          id="expiry"
                          placeholder="MM/YY"
                          type="text"
                        />
                      </div>
                      {/* CVV */}
                      <div className="space-y-2">
                        <label
                          className="font-label-sm text-label-sm text-on-surface-variant"
                          htmlFor="cvv"
                        >
                          CVV
                        </label>
                        <input
                          className="w-full h-12 px-4 bg-surface-dim/30 border-none rounded-lg text-body-md placeholder:text-outline-variant"
                          id="cvv"
                          placeholder="123"
                          type="password"
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="my-8 border-outline-variant/20" />

                  {/* Billing Address */}
                  <div className="flex items-center space-x-3 cursor-pointer select-none group">
                    <div className="relative flex items-center">
                      <input
                        defaultChecked
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

                {/* Order Summary Box */}
                <div className="bg-surface-container p-6 rounded-2xl">
                  <div
                    className="flex justify-between items-center mb-4 cursor-pointer group"
                    onClick={() => setIsSummaryOpen(!isSummaryOpen)}
                  >
                    <h3 className="font-label-md text-label-md">
                      Order Summary
                    </h3>
                    <div className="flex items-center text-primary">
                      <span className="font-label-md mr-1">$221.40</span>
                      <span
                        className={`material-symbols-outlined text-[18px] group-hover:translate-y-0.5 transition-transform ${isSummaryOpen ? "rotate-180" : ""}`}
                      >
                        expand_more
                      </span>
                    </div>
                  </div>

                  {isSummaryOpen && (
                    <div className="space-y-2 pt-2 border-t border-outline-variant/30">
                      <div className="flex justify-between font-label-sm text-on-surface-variant">
                        <span>Subtotal</span>
                        <span>$195.00</span>
                      </div>
                      <div className="flex justify-between font-label-sm text-on-surface-variant">
                        <span>Shipping</span>
                        <span>$12.50</span>
                      </div>
                      <div className="flex justify-between font-label-sm text-on-surface-variant">
                        <span>Tax</span>
                        <span>$13.90</span>
                      </div>
                      <div className="flex justify-between font-label-md text-on-surface pt-2">
                        <span>Total</span>
                        <span>$221.40</span>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  className="w-full bg-primary text-white h-14 rounded-full font-label-md text-label-md hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center"
                  type="submit"
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
