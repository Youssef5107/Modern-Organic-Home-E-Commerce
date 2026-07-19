import { useState } from "react";

// Sample Cart Items Array for cleaner modular mapping
const CART_ITEMS = [
  {
    id: 1,
    title: "Hand-Thrown Terracotta Vase",
    details: "Sandstone • Medium",
    qty: 1,
    price: 85.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsNZ7Zaxgh6NzcvY0ZTkYLiUdlRUw5OFZoo22Yhk7EoGjIuquFtrE3c-vdfEjYjE9h6YLx0EmkMZGqSXuuuDNs6QFFB6ckOgO0OP1iiDl1v4vMvj5bsfHONWTDK1w3wCx7wECPwS59INOKXpvDo7bEo4XAxiZtXfwBV9UWOl7an9NuFV8-WaCHEAUu1X5nWkUorbiZfG6njY63cbTkb8d0_cOJ8DMzh63nrmvHK0hWWz7jGZTmrBs",
    alt: "A close-up photograph of a handmade ceramic pitcher in a soft, warm oatmeal glaze with subtle speckles.",
  },
  {
    id: 2,
    title: "Woven Cotton Throw",
    details: 'Sage • 50"x70"',
    qty: 1,
    price: 120.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0RwPreRnz8uS1dfjnDS4ERIVnHyaiTXzvoM2tnIOa79RoKHuj0daJYgvDZk5FyLi9kpriyu8AkgdgAqTFYQgdVRt1EKfRPvymhNVKYl13k93nLdwQ-ZTu1eP5vEubF-I0sREVO2_PDAjaUveSw85b7jpGbMIHMoCgtq97oLbKNLPPWD7Z3xvGlECc94-Bho6W22A3OefQxH-vEw2RZmK4A5rqw1CB9uIqgp4pPtOjVkhB72kV_xA",
    alt: "A top-down view of a thick, woven organic cotton throw blanket in a sage green hue, folded neatly.",
  },
];

export default function Checkout() {
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "OR",
    zip: "",
    phone: "",
  });

  // Calculate dynamic summary variables
  const subtotal = CART_ITEMS.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );
  const shippingCost = shippingMethod === "express" ? 15.0 : 0.0;
  const estimatedTax = 16.4;
  const total = subtotal + shippingCost + estimatedTax;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Proceeding with order:", { formData, shippingMethod, total });
  };

  return (
    <div className="bg-[#fbf9f4] text-[#1b1c19] font-body-md min-h-screen">
      {/* TopAppBar (Simplified for Checkout) */}
      <header className="w-full top-0 sticky bg-[#fbf9f4] z-50 shadow-sm shadow-[#6f3429]/5 flex justify-center items-center px-5 md:px-16 h-16">
        <div className="max-w-[1280px] w-full flex justify-between items-center">
          <a
            className="text-2xl md:text-2xl tracking-tight text-[#6f3429] font-serif"
            href="#"
          >
            Modern Organic Home
          </a>
          <div className="hidden md:flex items-center gap-4 text-[#534340] font-semibold text-sm">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">lock</span>{" "}
              Secure Checkout
            </span>
          </div>
          <button className="material-symbols-outlined text-[#534340] hover:bg-[#f5f3ee] p-2 rounded-full transition-colors active:scale-95">
            close
          </button>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-5 md:px-16 py-8 md:py-16">
        {/* Progress Stepper */}
        <nav className="flex items-center justify-center mb-16 overflow-hidden">
          <div className="flex items-center w-full max-w-3xl">
            {/* Step 1: Shipping */}
            <div className="flex flex-col items-center relative z-10">
              <div className="w-10 h-10 rounded-full bg-[#6f3429] text-white flex items-center justify-center font-semibold text-sm mb-2 shadow-md transition-transform hover:scale-105">
                1
              </div>
              <span className="text-xs font-medium text-[#6f3429]">
                Shipping
              </span>
            </div>
            <div className="flex-1 h-0.5 bg-[#d8c2bd] mx-2 -mt-6 relative">
              <div className="absolute inset-0 bg-[#6f3429] w-1/2"></div>
            </div>
            {/* Step 2: Payment */}
            <div className="flex flex-col items-center relative z-10">
              <div className="w-10 h-10 rounded-full bg-[#e4e2dd] text-[#534340] flex items-center justify-center font-semibold text-sm mb-2">
                2
              </div>
              <span className="text-xs font-medium text-[#534340]">
                Payment
              </span>
            </div>
            <div className="flex-1 h-0.5 bg-[#d8c2bd] mx-2 -mt-6"></div>
            {/* Step 3: Review */}
            <div className="flex flex-col items-center relative z-10">
              <div className="w-10 h-10 rounded-full bg-[#e4e2dd] text-[#534340] flex items-center justify-center font-semibold text-sm mb-2">
                3
              </div>
              <span className="text-xs font-medium text-[#534340]">Review</span>
            </div>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Checkout Modules */}
          <div className="lg:col-span-7 space-y-8">
            {/* Section: Shipping Address */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl mb-4 text-[#1b1c19] font-serif">
                Shipping Address
              </h2>
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="md:col-span-1 transition-transform duration-200 focus-within:scale-[1.01]">
                  <label className="block text-xs font-medium text-[#534340] mb-1">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-[#f5f3ee] border-none rounded-lg px-4 py-3 text-[#1b1c19] placeholder-[#d8c2bd] focus:ring-1 focus:ring-[#6f3429] outline-none transition-all"
                    placeholder="Julian"
                    type="text"
                  />
                </div>
                <div className="md:col-span-1 transition-transform duration-200 focus-within:scale-[1.01]">
                  <label className="block text-xs font-medium text-[#534340] mb-1">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-[#f5f3ee] border-none rounded-lg px-4 py-3 text-[#1b1c19] placeholder-[#d8c2bd] focus:ring-1 focus:ring-[#6f3429] outline-none transition-all"
                    placeholder="Merrick"
                    type="text"
                  />
                </div>
                <div className="md:col-span-2 transition-transform duration-200 focus-within:scale-[1.01]">
                  <label className="block text-xs font-medium text-[#534340] mb-1">
                    Street Address
                  </label>
                  <input
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full bg-[#f5f3ee] border-none rounded-lg px-4 py-3 text-[#1b1c19] placeholder-[#d8c2bd] focus:ring-1 focus:ring-[#6f3429] outline-none transition-all"
                    placeholder="123 Serenity Lane"
                    type="text"
                  />
                </div>
                <div className="md:col-span-1 transition-transform duration-200 focus-within:scale-[1.01]">
                  <label className="block text-xs font-medium text-[#534340] mb-1">
                    City
                  </label>
                  <input
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-[#f5f3ee] border-none rounded-lg px-4 py-3 text-[#1b1c19] placeholder-[#d8c2bd] focus:ring-1 focus:ring-[#6f3429] outline-none transition-all"
                    placeholder="Portland"
                    type="text"
                  />
                </div>
                <div className="md:col-span-1 grid grid-cols-2 gap-4">
                  <div className="transition-transform duration-200 focus-within:scale-[1.01]">
                    <label className="block text-xs font-medium text-[#534340] mb-1">
                      State
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full bg-[#f5f3ee] border-none rounded-lg px-4 py-3 text-[#1b1c19] focus:ring-1 focus:ring-[#6f3429] outline-none transition-all"
                    >
                      <option>OR</option>
                      <option>CA</option>
                      <option>WA</option>
                    </select>
                  </div>
                  <div className="transition-transform duration-200 focus-within:scale-[1.01]">
                    <label className="block text-xs font-medium text-[#534340] mb-1">
                      ZIP
                    </label>
                    <input
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="w-full bg-[#f5f3ee] border-none rounded-lg px-4 py-3 text-[#1b1c19] placeholder-[#d8c2bd] focus:ring-1 focus:ring-[#6f3429] outline-none transition-all"
                      placeholder="97201"
                      type="text"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 transition-transform duration-200 focus-within:scale-[1.01]">
                  <label className="block text-xs font-medium text-[#534340] mb-1">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-[#f5f3ee] border-none rounded-lg px-4 py-3 text-[#1b1c19] placeholder-[#d8c2bd] focus:ring-1 focus:ring-[#6f3429] outline-none transition-all"
                    placeholder="(503) 555-0123"
                    type="tel"
                  />
                </div>
              </form>
            </section>

            {/* Section: Shipping Method */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl mb-4 text-[#1b1c19] font-serif">
                Shipping Method
              </h2>
              <div className="space-y-3">
                <label
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors group ${shippingMethod === "standard" ? "border-[#6f3429]" : "border-[#d8c2bd] hover:border-[#6f3429]"}`}
                >
                  <div className="flex items-center gap-4">
                    <input
                      checked={shippingMethod === "standard"}
                      onChange={() => setShippingMethod("standard")}
                      className="w-5 h-5 text-[#6f3429] border-[#86736f] focus:ring-[#6f3429]"
                      name="shipping"
                      type="radio"
                    />
                    <div>
                      <p className="font-semibold text-sm text-[#1b1c19]">
                        Standard Ground
                      </p>
                      <p className="text-xs text-[#534340]">
                        3-5 business days
                      </p>
                    </div>
                  </div>
                  <span className="font-semibold text-sm text-[#1b1c19]">
                    Free
                  </span>
                </label>

                <label
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors group ${shippingMethod === "express" ? "border-[#6f3429]" : "border-[#d8c2bd] hover:border-[#6f3429]"}`}
                >
                  <div className="flex items-center gap-4">
                    <input
                      checked={shippingMethod === "express"}
                      onChange={() => setShippingMethod("express")}
                      className="w-5 h-5 text-[#6f3429] border-[#86736f] focus:ring-[#6f3429]"
                      name="shipping"
                      type="radio"
                    />
                    <div>
                      <p className="font-semibold text-sm text-[#1b1c19]">
                        Express Delivery
                      </p>
                      <p className="text-xs text-[#534340]">
                        1-2 business days
                      </p>
                    </div>
                  </div>
                  <span className="font-semibold text-sm text-[#1b1c19]">
                    $15.00
                  </span>
                </label>
              </div>
            </section>

            {/* Section: Payment Method */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm opacity-60">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl text-[#1b1c19] font-serif">
                  Payment Method
                </h2>
                <span className="text-xs px-2 py-1 bg-[#f0eee9] text-[#534340] rounded">
                  Locked
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  type="button"
                  disabled
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#d8c2bd] hover:bg-[#f5f3ee] transition-all cursor-not-allowed"
                >
                  <span className="material-symbols-outlined text-[#6f3429]">
                    credit_card
                  </span>
                  <span className="font-semibold text-sm">Credit Card</span>
                </button>
                <button
                  type="button"
                  disabled
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#d8c2bd] hover:bg-[#f5f3ee] transition-all cursor-not-allowed"
                >
                  <span className="material-symbols-outlined text-[#1b1c19]">
                    apps
                  </span>
                  <span className="font-semibold text-sm">Apple Pay</span>
                </button>
              </div>
            </section>
          </div>

          {/* Right Column: Order Summary */}
          <aside className="lg:col-span-5">
            <div className="sticky top-24 bg-[#f5f3ee] p-6 md:p-8 rounded-2xl shadow-[0_4px_24px_rgba(111,52,41,0.04)]">
              <h2 className="text-2xl mb-6 text-[#1b1c19] font-serif border-b border-[#d8c2bd] pb-4">
                Order Summary
              </h2>

              {/* Items List */}
              <div className="space-y-4 mb-8 max-h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-[#f5f3ee] scrollbar-thumb-[#d8c2bd]">
                {CART_ITEMS.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 bg-white rounded-lg flex-shrink-0 overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={item.img}
                        alt={item.alt}
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h4 className="font-semibold text-sm text-[#1b1c19] leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#534340]">{item.details}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-[#534340]">
                          Qty: {item.qty}
                        </span>
                        <span className="font-semibold text-sm text-[#1b1c19]">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals Calculation */}
              <div className="space-y-3 border-t border-[#d8c2bd] pt-6 mb-8">
                <div className="flex justify-between font-semibold text-sm text-[#534340]">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-sm text-[#534340]">
                  <span>Shipping</span>
                  <span
                    className={
                      shippingCost === 0 ? "text-[#5c614d]" : "text-[#1b1c19]"
                    }
                  >
                    {shippingCost === 0
                      ? "Free Shipping"
                      : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between font-semibold text-sm text-[#534340]">
                  <span>Estimated Tax</span>
                  <span>${estimatedTax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-2xl text-[#1b1c19] font-serif pt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="space-y-4">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#6f3429] text-white py-4 rounded-xl font-semibold text-sm shadow-lg shadow-[#6f3429]/20 hover:bg-[#8c4b3e] transition-all active:scale-[0.98] duration-200"
                >
                  Continue to Payment
                </button>
                <p className="text-center text-[#534340] text-xs font-medium flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[14px]">
                    shield_lock
                  </span>
                  100% Secure Transaction
                </p>
              </div>

              {/* Aesthetic Lookbook Promotion */}
              <div className="mt-8 rounded-xl overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div
                  className="h-32 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmioSqCvZEYyPwzytJvQN1-JM4UgNFf_U43DhFW_leI_qQP_DAsPcUCA6hkgbnLKZ_sL7ce1glQ_xaY3I2RJm2CPoHNbH8w-7s9leHLCbEOZtPAKQHeeX2FexPc9fDxoJfVspKNtfr_awT5_lJn-6Uav08cgSMY_uOlwSJnfm5XaCwCA5yTAG6-zBjHjqBAab4ZRslR-LOAz396Zkh7GHDARSv4VHpnJV9nY94CrUqBP2ghgGaU_w')",
                  }}
                ></div>
                <div className="absolute bottom-2 left-3 text-white">
                  <p className="font-serif text-sm">Join the Club</p>
                  <p className="text-[10px] opacity-90">
                    15% off your next order
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Simple Footer for Focused Checkout */}
      <footer className="py-8 border-t border-[#d8c2bd]/30 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6 text-[#534340] text-xs font-medium">
            <a className="hover:text-[#6f3429] transition-colors" href="#">
              Terms of Service
            </a>
            <a className="hover:text-[#6f3429] transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-[#6f3429] transition-colors" href="#">
              Shipping Guide
            </a>
          </div>
          <p className="text-xs text-[#86736f]">
            © 2026 Modern Organic Home. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
