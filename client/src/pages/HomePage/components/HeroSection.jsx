import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <>
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAi0KHY1XXICMr1mepQy0LAY8b02MiF_Lt7rVqOcwVhmQlKlJI2kBs2VaYZLpWFQJ5g0W4zQvzMqiv1kziIGA9izOukcgMI8JbhQ4UnPLaq-SfTxAXmeeJ6osP9h2sgHMeCDWs2x3He1tBhp1HMcMXScau43YSO80RpiVFD9hn_NgVJZcZvmSTBTtKmW1nCpdP9spKQGw018yDTwhpTXYlRw3swOU9k04w98vwX98CyNNRNopH5pTI')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto">
        <div className="max-w-2xl">
          <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4 block">
            New Season
          </span>
          <h2 className="font-headline-xl text-headline-xl md:text-[64px] text-on-background mb-6 leading-tight">
            The Autumn Collection
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            Curated pieces inspired by the raw beauty of late harvest and
            shifting light. Bring nature's quietude indoors.
          </p>
          <div className="flex gap-4">
            <Link
              to={"/shop"}
              className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-label-md hover:shadow-lg transition-all active:scale-95"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "auto" });
              }}
            >
              Explore Collection
            </Link>
            <button className="border border-secondary text-secondary px-8 py-4 rounded-full font-label-md text-label-md hover:bg-secondary/5 transition-all active:scale-95">
              View Lookbook
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
