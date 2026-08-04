import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <div className="w-full min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center relative overflow-hidden bg-surface text-on-surface font-sans antialiased animate-page-enter -mb-32 pb-32">
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-surface/80 z-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[1280px] mx-auto px-5 md:px-16 text-center gap-6 py-8">
        {/* Image */}
        <div className="w-44 md:w-56 h-auto aspect-[3/4] max-h-[35vh] rounded-t-full rounded-b-xl overflow-hidden shadow-[0_20px_40px_rgba(111,52,41,0.08)] transform hover:scale-105 transition-transform duration-700 ease-out">
          <img
            alt="Modern amphora ceramic vessel"
            className="w-full h-full object-cover"
            src="../../../public/favicon.png"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <h1 className="font-headline text-4xl md:text-5xl text-primary leading-tight tracking-tight">
            Coming Soon
          </h1>
          <p className="text-base text-on-surface-variant max-w-md mx-auto">
            A refined space is in the making. We’re working behind the scenes to
            bring this feature to life
          </p>
        </div>

        <Link
          to="/shop"
          className="mt-2 font-semibold text-sm tracking-[0.02em] text-secondary hover:text-primary underline decoration-1 underline-offset-4 transition-colors"
        >
          Return to Shop
        </Link>
      </div>
    </div>
  );
}
