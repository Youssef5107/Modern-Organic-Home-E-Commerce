import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function OrderSuccessModal({
  orderNumber = "SJ-29481",
  onTrackOrder = () => {},
  onReturnHome = () => {},
}) {
  useEffect(() => {
    const icon = document.getElementById("success-icon");
    if (icon) {
      const timer1 = setTimeout(() => icon.classList.add("scale-110"), 600);
      const timer2 = setTimeout(() => icon.classList.remove("scale-110"), 800);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen relative overflow-hidden animate-page-enter">
      {/* Background Order Review (Faded/Blurred) */}
      <div className="fixed inset-0 z-0 overflow-hidden flex flex-col blur-md scale-105 pointer-events-none opacity-40">
        <header className="bg-background px-margin-mobile py-4 flex items-center justify-between border-b border-surface-container">
          <span className="material-symbols-outlined text-primary">menu</span>
          <h1 className="font-headline-md text-headline-md text-primary">
            Sojourn Home
          </h1>
          <span className="material-symbols-outlined text-primary">
            shopping_bag
          </span>
        </header>

        <main className="flex-1 px-margin-mobile pt-8 pb-stack-lg max-w-container-max mx-auto w-full">
          <h2 className="font-headline-lg text-headline-lg mb-stack-sm">
            Order Review
          </h2>
          <div className="space-y-stack-sm">
            <div className="bg-surface-container p-4 rounded-xl flex gap-4">
              <div className="w-24 h-24 bg-surface-dim rounded-lg" />
              <div className="flex-1">
                <div className="h-4 w-3/4 bg-surface-dim mb-2 rounded" />
                <div className="h-3 w-1/4 bg-surface-dim rounded" />
              </div>
            </div>
            <div className="bg-surface-container p-4 rounded-xl flex gap-4">
              <div className="w-24 h-24 bg-surface-dim rounded-lg" />
              <div className="flex-1">
                <div className="h-4 w-3/4 bg-surface-dim mb-2 rounded" />
                <div className="h-3 w-1/4 bg-surface-dim rounded" />
              </div>
            </div>
          </div>

          <div className="mt-stack-md pt-stack-md border-t border-surface-container space-y-4">
            <div className="flex justify-between">
              <div className="h-4 w-20 bg-surface-dim rounded" />
              <div className="h-4 w-12 bg-surface-dim rounded" />
            </div>
            <div className="flex justify-between font-bold">
              <div className="h-6 w-16 bg-surface-dim rounded" />
              <div className="h-6 w-20 bg-surface-dim rounded" />
            </div>
          </div>
        </main>
      </div>

      {/* Modal Overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-margin-mobile bg-on-background/10 backdrop-blur-sm">
        {/* Success Modal Card */}
        <div className="relative bg-surface-bright w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-500 flex flex-col items-center text-center p-8 md:p-12">
          {/* Subtle Grain Overlay */}
          <div className="absolute inset-0 grain-texture pointer-events-none" />

          {/* Success Icon Area */}
          <div className="relative mb-stack-md">
            {/* Organic Decorative Shape */}
            <div className="absolute inset-0 bg-secondary-container/30 organic-blob scale-150 rotate-12" />
            <div className="relative w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
              <span
                id="success-icon"
                className="material-symbols-outlined text-5xl transition-transform duration-200"
                style={{ fontVariationSettings: "'wght' 300" }}
              >
                check_circle
              </span>
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-4 max-w-xs mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-primary leading-tight">
              Order Placed
            </h2>
            <p className="font-label-md text-label-md text-outline uppercase tracking-widest">
              Order #{orderNumber}
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant px-2">
              Your curated pieces are being prepared with care.
            </p>
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-outline-variant/50 my-stack-md" />

          {/* Actions */}
          <div className="flex flex-col gap-4 w-full">
            <Link
              to={"/profile/active-orders"}
              onClick={() => {
                onTrackOrder;
                window.scrollTo({ top: 0, behavior: "auto" });
              }}
              className="w-full bg-primary text-on-primary font-label-md text-label-md py-4 rounded-xl shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
            >
              Track Order
            </Link>
            <Link
              to={"/"}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "auto" });
              }}
              onClick={onReturnHome}
              className="w-full border border-secondary text-secondary font-label-md text-label-md py-4 rounded-xl hover:bg-secondary/5 active:scale-95 transition-all duration-200"
            >
              Return Home
            </Link>
          </div>

          {/* Footer Minimal Branding */}
          <p className="mt-stack-md text-[10px] font-label-sm text-outline-variant uppercase tracking-widest opacity-60">
            Thank you for choosing Sojourn
          </p>
        </div>
      </div>
    </div>
  );
}
