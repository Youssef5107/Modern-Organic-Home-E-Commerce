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
          const HEADER_HEIGHT = 160;
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
    <main className="animate-page-enter">
      {/* Screen reader only page title for proper h1 structure */}
      <h1 className="sr-only">Modern Home - Furniture & Interior Design</h1>

      {/* Hero Section */}
      <section
        aria-label="Featured Collection"
        className="relative w-full reveal-on-scroll"
      >
        <HeroSection />
      </section>

      {/* Categories Section */}
      <section
        aria-label="Shop by Room"
        className="scroll-mt-24 mt-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal-on-scroll"
      >
        <CategoriesSection />
      </section>

      {/* New Arrivals Product Cards Section */}
      <section
        id="New-Arrivals"
        aria-label="New Arrivals"
        className="mt-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal-on-scroll"
      >
        <NewArrivalsSection />
      </section>

      {/* Editorial Content Section */}
      <section
        aria-label="Our Philosophy"
        className="mt-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal-on-scroll"
      >
        <EditorialContentSection />
      </section>
    </main>
  );
}
