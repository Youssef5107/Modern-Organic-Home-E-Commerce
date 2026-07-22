import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import NewArrivalsSection from "./components/NewArrivalsSection";
import CategoriesSection from "./components/CategoriesSection";
import EditorialContentSection from "./components/EditorialContentSection";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const elementTop = element.getBoundingClientRect().top;
          const HEADER_HEIGHT = 130;
          const targetPosition = elementTop + window.scrollY - HEADER_HEIGHT;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="animate-page-enter ">
      {/* Hero Section */}
      <section className="relative w-full h-[618px] md:h-[707px] overflow-hidden reveal-on-scroll">
        <HeroSection />
      </section>

      {/* Categories Section */}
      <section className="scroll-mt-24 mt-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal-on-scroll">
        <CategoriesSection />
      </section>

      {/* New Arrivals Product Cards Section */}
      <section
        id="New-Arrivals"
        className="mt-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal-on-scroll"
      >
        <NewArrivalsSection />
      </section>

      {/* Editorial Content Section */}
      <section className="mt-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal-on-scroll">
        <EditorialContentSection />
      </section>
    </div>
  );
}
