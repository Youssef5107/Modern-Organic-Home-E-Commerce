import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function LoadingOverlay() {
  const isLoading = useSelector((state) => state.loading.isLoading);
  const hasStartedLoading = useRef(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isLoading) {
      hasStartedLoading.current = true;
    } else if (hasStartedLoading.current) {
      setIsInitialLoad(false);
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="rounded-3xl bg-surface py-8 px-10 shadow-2xl border border-white/10 text-center">
        <div className="loading-dots mx-auto mb-4">
          <span className="loading-dot bg-primary"></span>
          <span className="loading-dot bg-primary"></span>
          <span className="loading-dot bg-primary"></span>
        </div>
        <p className="font-label-md text-label-md text-on-surface">
          Loading content...
        </p>
        {isInitialLoad && (
          <p className="mt-2 max-w-xs text-label-sm text-on-surface-variant">
            Our server is waking up. This may take a moment.
          </p>
        )}
      </div>
    </div>
  );
}
