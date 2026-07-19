export default function Checkout() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-md md:py-stack-lg animate-page-enter">
      {/* Progress Stepper */}
      <nav className="flex items-center justify-center mb-stack-lg overflow-hidden">
        <div className="flex items-center w-full max-w-3xl">
          {/* Step 1: Shipping */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md mb-2 shadow-md transition-transform hover:scale-105">
              1
            </div>
            <span className="font-label-sm text-primary">Shipping</span>
          </div>
          <div className="flex-1 h-0.5 bg-outline-variant mx-2 -mt-6 relative">
            <div className="absolute inset-0 bg-primary w-1/2"></div>
          </div>

          {/* Step 2: Payment */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-md mb-2">
              2
            </div>
            <span className="font-label-sm text-on-surface-variant">
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Column: Forms */}
        <div className="lg:col-span-7 space-y-stack-md">
          {/* Section: Shipping Address */}
          <section className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm reveal-on-scroll">
            <h2 className="font-headline-md text-headline-md mb-stack-sm text-on-surface">
              Shipping Address
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-1">
                <label className="block font-label-sm text-on-surface-variant mb-1">
                  First Name
                </label>
                <input
                  className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-on-surface placeholder-outline-variant focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Julian"
                  type="text"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block font-label-sm text-on-surface-variant mb-1">
                  Last Name
                </label>
                <input
                  className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-on-surface placeholder-outline-variant focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Merrick"
                  type="text"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block font-label-sm text-on-surface-variant mb-1">
                  Street Address
                </label>
                <input
                  className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-on-surface placeholder-outline-variant focus:ring-1 focus:ring-primary transition-all"
                  placeholder="123 Serenity Lane"
                  type="text"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block font-label-sm text-on-surface-variant mb-1">
                  City
                </label>
                <input
                  className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-on-surface placeholder-outline-variant focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Portland"
                  type="text"
                />
              </div>
              <div className="md:col-span-1 grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-sm text-on-surface-variant mb-1">
                    State
                  </label>
                  <select className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary transition-all">
                    <option>OR</option>
                    <option>CA</option>
                    <option>WA</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-sm text-on-surface-variant mb-1">
                    ZIP
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-on-surface placeholder-outline-variant focus:ring-1 focus:ring-primary transition-all"
                    placeholder="97201"
                    type="text"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block font-label-sm text-on-surface-variant mb-1">
                  Phone Number
                </label>
                <input
                  className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 text-on-surface placeholder-outline-variant focus:ring-1 focus:ring-primary transition-all"
                  placeholder="(503) 555-0123"
                  type="tel"
                />
              </div>
            </form>
          </section>

          {/* Section: Shipping Method */}
          <section className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm reveal-on-scroll">
            <h2 className="font-headline-md text-headline-md mb-stack-sm text-on-surface">
              Shipping Method
            </h2>
            <div className="space-y-3">
              <label className="flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-primary cursor-pointer transition-colors group">
                <div className="flex items-center gap-4">
                  <input
                    defaultChecked
                    className="w-5 h-5 text-primary border-outline focus:ring-primary"
                    name="shipping"
                    type="radio"
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
                <span className="font-label-md text-on-surface">Free</span>
              </label>
              <label className="flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-primary cursor-pointer transition-colors group">
                <div className="flex items-center gap-4">
                  <input
                    className="w-5 h-5 text-primary border-outline focus:ring-primary"
                    name="shipping"
                    type="radio"
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

          {/* Section: Payment Method */}
          <section className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm opacity-60 reveal-on-scroll">
            <div className="flex items-center justify-between mb-stack-sm">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Payment Method
              </h2>
              <span className="font-label-sm px-2 py-1 bg-surface-container text-on-surface-variant rounded">
                Locked
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-all">
                <span className="material-symbols-outlined text-primary">
                  credit_card
                </span>
                <span className="font-label-md">Credit Card</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-all">
                <span className="material-symbols-outlined text-on-background">
                  apps
                </span>
                <span className="font-label-md">Apple Pay</span>
              </button>
            </div>
          </section>
        </div>

        {/* Right Column: Order Summary */}
        <aside className="lg:col-span-5">
          <div className="sticky top-24 bg-surface-container-low p-6 md:p-8 rounded-2xl shadow-[0_4px_24px_rgba(111,52,41,0.04)]">
            <h2 className="font-headline-md text-headline-md mb-6 text-on-surface border-b border-outline-variant pb-4">
              Order Summary
            </h2>

            {/* Items List */}
            <div className="space-y-4 mb-8 max-h-64 overflow-y-auto custom-scrollbar pr-2">
              {/* Product Item 1 */}
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-white rounded-lg flex-shrink-0 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Hand-Thrown Terracotta Vase in a soft, warm oatmeal glaze"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsNZ7Zaxgh6NzcvY0ZTkYLiUdlRUw5OFZoo22Yhk7EoGjIuquFtrE3c-vdfEjYjE9h6YLx0EmkMZGqSXuuuDNs6QFFB6ckOgO0OP1iiDl1v4vMvj5bsfHONWTDK1w3wCx7wECPwS59INOKXpvDo7bEo4XAxiZtXfwBV9UWOl7an9NuFV8-WaCHEAUu1X5nWkUorbiZfG6njY63cbTkb8d0_cOJ8DMzh63nrmvHK0hWWz7jGZTmrBs"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h4 className="font-label-md text-on-surface leading-tight">
                      Hand-Thrown Terracotta Vase
                    </h4>
                    <p className="font-label-sm text-on-surface-variant">
                      Sandstone • Medium
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-label-sm text-on-surface-variant">
                      Qty: 1
                    </span>
                    <span className="font-label-md text-on-surface">
                      $85.00
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Item 2 */}
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-white rounded-lg flex-shrink-0 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Woven Cotton Throw blanket in a sage green hue"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0RwPreRnz8uS1dfjnDS4ERIVnHyaiTXzvoM2tnIOa79RoKHuj0daJYgvDZk5FyLi9kpriyu8AkgdgAqTFYQgdVRt1EKfRPvymhNVKYl13k93nLdwQ-ZTu1eP5vEubF-I0sREVO2_PDAjaUveSw85b7jpGbMIHMoCgtq97oLbKNLPPWD7Z3xvGlECc94-Bho6W22A3OefQxH-vEw2RZmK4A5rqw1CB9uIqgp4pPtOjVkhB72kV_xA"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h4 className="font-label-md text-on-surface leading-tight">
                      Woven Cotton Throw
                    </h4>
                    <p className="font-label-sm text-on-surface-variant">
                      Sage • 50"x70"
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-label-sm text-on-surface-variant">
                      Qty: 1
                    </span>
                    <span className="font-label-md text-on-surface">
                      $120.00
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Totals */}
            <div className="space-y-3 border-t border-outline-variant pt-6 mb-8">
              <div className="flex justify-between font-label-md text-on-surface-variant">
                <span>Subtotal</span>
                <span>$205.00</span>
              </div>
              <div className="flex justify-between font-label-md text-on-surface-variant">
                <span>Shipping</span>
                <span className="text-secondary">Calculated at next step</span>
              </div>
              <div className="flex justify-between font-label-md text-on-surface-variant">
                <span>Estimated Tax</span>
                <span>$16.40</span>
              </div>
              <div className="flex justify-between font-headline-md text-on-surface pt-2">
                <span>Total</span>
                <span>$221.40</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-md shadow-lg shadow-primary/20 hover:bg-primary-container transition-all active:scale-[0.98] duration-200">
                Continue to Payment
              </button>
              <p className="text-center text-on-surface-variant font-label-sm flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[14px]">
                  shield_lock
                </span>
                100% Secure Transaction
              </p>
            </div>

            {/* Editorial Lookbook Hook */}
            <div className="mt-stack-md rounded-xl overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div
                className="h-32 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmioSqCvZEYyPwzytJvQN1-JM4UgNFf_U43DhFW_leI_qQP_DAsPcUCA6hkgbnLKZ_sL7ce1glQ_xaY3I2RJm2CPoHNbH8w-7s9leHLCbEOZtPAKQHeeX2FexPc9fDxoJfVspKNtfr_awT5_lJn-6Uav08cgSMY_uOlwSJnfm5XaCwCA5yTAG6-zBjHjqBAab4ZRslR-LOAz396Zkh7GHDARSv4VHpnJV9nY94CrUqBP2ghgGaU_w')",
                }}
              ></div>
              <div className="absolute bottom-2 left-3 text-white">
                <p className="font-headline-md text-sm">Join the Club</p>
                <p className="font-label-sm text-[10px] opacity-90">
                  15% off your next order
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
