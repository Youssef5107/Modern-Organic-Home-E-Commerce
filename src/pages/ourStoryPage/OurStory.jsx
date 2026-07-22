import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function OurStory() {
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
    <div className="font-body-md overflow-x-hidden min-h-screen bg-background text-on-background">
      <div className="grain-overlay"></div>

      <main className="max-w-container-max mx-auto">
        {/* Hero Section */}
        <section className="px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col md:flex-row items-center gap-gutter lg:gap-32">
          <div
            className="w-full md:w-1/2 order-2 md:order-1 space-y-stack-sm"
            data-aos="fade-up"
          >
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">
              Our Heritage
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface max-w-xl md:text-6xl lg:text-7xl">
              Built by Hand, Inspired by Earth
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
              In a world of constant motion, we choose the deliberate path. Our
              collection is a tribute to the beauty of slow living and the
              enduring value of objects that tell a story—crafted with patience,
              purpose, and respect for the materials they are born from.
            </p>
            <div className="pt-base">
              <Link
                to={"/shop"}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "auto" });
                }}
              >
                <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md hover:opacity-90 transition-all flex items-center gap-2 group">
                  Discover the Process
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/5 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr9fRDotAex33PKAExoP73Z78r_SgGt4OpwMvXmHFNYanHj5bfFQAUCEDy7no3YgAAdQH45vh2Y8dvMtXWP2g5ztRrfWjOp5nFnwTu1DWOLDAPt2VMCAfmbG8cICyo9bbQtacz38xIg-2ukFfwD2g5YVIvdsaE6sMVPi4HrUOTCW34_O2VSxGVirDx2hh5HZUxA2kCK4iIDImk-bcR4DZvzeONrfMHl3zj0rgF-UULSgS6kgExrnY"
                alt="Handcrafted ceramic piece"
                className="w-full h-auto aspect-[1.49] object-cover rounded-[2rem] ambient-shadow transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section
          id="our-philosophy"
          className="bg-surface-container-low py-stack-lg my-stack-lg overflow-hidden"
        >
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-7">
              <div className="relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeciUakWgo6_8n0y-Hjlja04cLsZrn5FpAf1lgaJPc27Xzr4PN2iwa40ar9VajzQ1DT1HuhQyQC_dI8DJt42-Stb6z5nEL8EDUbc_SR6pv0KbAZoc4mf24465_9ni2y1_vPMCAwfP5oMib_A36D4m6q8EHupcIvq9QIPcDn4LMZvzuC6QOYyOedUkSDBxFu2Q5558ZcmV76ME6XhXhOeFEjl89IprADBsdID5mOtsfkxgv4afMahTwoJcyQK4ME1m8"
                  alt="Craftsperson shaping clay"
                  className="w-full h-[400px] object-cover rounded-xl shadow-sm"
                />
                <div className="absolute -bottom-10 -right-10 hidden lg:block w-64 h-64 bg-surface p-4 rounded-xl ambient-shadow">
                  <div className="w-full h-full border border-outline-variant flex items-center justify-center p-8 text-center italic font-headline-md text-primary opacity-60">
                    "The soul of the maker lives in the clay."
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 md:pl-margin-mobile space-y-stack-sm pt-stack-md md:pt-0">
              <h3 className="font-headline-lg text-headline-lg text-on-surface">
                Our Philosophy
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Every piece at Modern Organic Home begins with a quiet
                conversation between the artist and the earth. Our commitment to
                hand-thrown ceramics ensures that no two items are
                identical—preserving the subtle fingerprints and intentional
                "imperfections" that breathe life into stoneware.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Sustainability isn't a goal; it's our foundation. We source
                materials from local riverbeds and prioritize closed-loop firing
                processes that minimize our footprint while maximizing the
                longevity of your home essentials.
              </p>
            </div>
          </div>
        </section>

        {/* Artisan Showcase */}
        <section className="px-margin-mobile md:px-margin-desktop py-stack-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-stack-md gap-4">
            <div className="space-y-base">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
                Mastery in Motion
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">
                The Artisans
              </h3>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-sm">
              Meet the hands behind the forms. Our collaborative of master
              craftspeople bring decades of tradition to modern silhouettes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter lg:gap-12">
            {/* Amphora Card */}
            <div className="group">
              <div className="overflow-hidden rounded-xl mb-stack-sm">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC67tzcUXR4WMiMptImzRnsbji27ryTa19Fs_v5D8ok3eFhyZ2EfHgP3rHO3ADlJTv6Ge_wYTYj3ard9fGnv9GTQbwzYWXjXNxBwOEYROprNk81QMuUK81EYIsp-Ybx3EG5_Wtbua09aca-qEoZYYpSihuuG2vD54M-4LcqSf-R1b9nw56YihmkJgYvgZkjCOQrViY_VynLF-yLRJYxpLzFleomao1WwR7nqDDNSRf7GtPBojx1NIA"
                  alt="The Sculptural Amphora"
                  className="w-full aspect-[1.49] object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-headline-md text-headline-md text-on-surface">
                    The Sculptural Amphora
                  </h4>
                  <p className="font-label-md text-on-surface-variant mt-1">
                    Terracotta &amp; Iron Wash
                  </p>
                </div>
                <span className="font-headline-md text-primary opacity-20 group-hover:opacity-100 transition-opacity">
                  01
                </span>
              </div>
            </div>

            {/* Basin Bowls Card */}
            <div className="group mt-stack-md md:mt-12 lg:mt-24">
              <div className="overflow-hidden rounded-xl mb-stack-sm">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKp-jg9aGqruwYnujyJcqckzZTTpkd38rdlMuEY4ZC30Tm2fKzD_YcWlvl6jvRd1-EaCGNKZr_waMMZAMwTw7mNhcVvEpSTRopD7pUJ6MGeHVq-oiXIiyVxn_i-jMbH8l7CBU2hLGT2EDPr3QXCEFexK-EtqvlPvS2g5E1txPc2HLpvyqzbPmVofiMtonsTeLsKrEJt3tU2MHYB7ZM81ti53NahSua-YnA8gnWsT8C8Q2_oV2x7mo"
                  alt="Basin Bowl Collective"
                  className="w-full aspect-[1.49] object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-headline-md text-headline-md text-on-surface">
                    Basin Bowl Collective
                  </h4>
                  <p className="font-label-md text-on-surface-variant mt-1">
                    Charcoal Matte Finish
                  </p>
                </div>
                <span className="font-headline-md text-primary opacity-20 group-hover:opacity-100 transition-opacity">
                  02
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability & Values */}
        <section className="px-margin-mobile md:px-margin-desktop py-stack-lg">
          <div className="bg-surface-container-highest rounded-3xl p-margin-mobile md:p-stack-lg grid grid-cols-1 lg:grid-cols-12 gap-stack-md items-center overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none grayscale mix-blend-multiply">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgcng9IjgiIGZpbGw9IiNlOGVhZWQiLz48cGF0aCBkPSJNMTcwIDEzMCBsMzAgNDAgbDIwLTE1IGw0MCA1NSBIMTQweiIgZmlsbD0iI2JkYzFjNiIvPjxjaXJjbGUgY3g9IjI1MCIgY3k9IjEyMCIgcj0iMTgiIGZpbGw9IiNiZGMxYzYiLz48L3N2Zz4="
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-5 space-y-stack-sm z-10">
              <h3 className="font-headline-lg text-headline-lg text-on-surface">
                Rooted in Ethics
              </h3>
              <p className="font-body-md text-on-surface-variant">
                Our values guide every decision, from the choice of our clay
                suppliers to the recycled packaging that brings our story to
                your doorstep.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6 z-10">
              {/* Value 1 */}
              <div className="bg-surface p-8 rounded-2xl ambient-shadow hover:bg-secondary-container transition-colors duration-300">
                <span className="material-symbols-outlined text-primary mb-4 text-4xl">
                  eco
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-2">
                  Sustainability
                </h4>
                <p className="font-label-sm text-on-surface-variant leading-relaxed">
                  Using earth-first materials and low-impact production methods
                  for a cleaner tomorrow.
                </p>
              </div>
              {/* Value 2 */}
              <div className="bg-surface p-8 rounded-2xl ambient-shadow hover:bg-secondary-container transition-colors duration-300">
                <span className="material-symbols-outlined text-primary mb-4 text-4xl">
                  brush
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-2">
                  Artisanship
                </h4>
                <p className="font-label-sm text-on-surface-variant leading-relaxed">
                  Supporting local craft communities and preserving ancient
                  techniques.
                </p>
              </div>
              {/* Value 3 */}
              <div className="bg-surface p-8 rounded-2xl ambient-shadow hover:bg-secondary-container transition-colors duration-300">
                <span className="material-symbols-outlined text-primary mb-4 text-4xl">
                  hourglass_empty
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-2">
                  Timelessness
                </h4>
                <p className="font-label-sm text-on-surface-variant leading-relaxed">
                  Creating durable, multi-generational objects that never go out
                  of style.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-margin-mobile md:px-margin-desktop py-32 text-center">
          <div className="max-w-2xl mx-auto space-y-stack-md">
            <h3 className="font-headline-xl text-headline-xl text-on-surface">
              Bring the story home.
            </h3>
            <p className="font-body-lg text-on-surface-variant mb-stack-md">
              Explore our curated collection of artisanal homewares and start
              your own legacy of slow, mindful living.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={"/shop"}
                className="bg-primary text-on-primary px-10 py-5 rounded-full font-label-md hover:scale-105 active:scale-95 transition-all shadow-lg w-full sm:w-auto"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "auto" });
                }}
              >
                Explore the Collection
              </Link>
              <a
                href="#"
                className="border border-secondary text-secondary px-10 py-5 rounded-full font-label-md hover:bg-secondary-container transition-all w-full sm:w-auto"
              >
                Read the Journal
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 bg-surface-container border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="md:col-span-2 space-y-4">
            <h2 className="font-headline-md text-primary tracking-tight">
              Modern Organic Home
            </h2>
            <p className="font-body-md text-on-surface-variant max-w-xs">
              Curating life's quiet moments with hand-crafted essentials for the
              mindful home.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-label-md text-on-surface">Explore</h4>
            <ul className="space-y-2 font-label-sm text-on-surface-variant">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Shop All
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Journal
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-label-md text-on-surface">Connect</h4>
            <ul className="space-y-2 font-label-sm text-on-surface-variant">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Pinterest
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-16 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row gap-4 justify-between items-center text-label-sm text-on-surface-variant/60">
          <p>© 2024 Modern Organic Home. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
