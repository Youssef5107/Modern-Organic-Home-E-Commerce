import { Link } from "react-router-dom";
export default function Lookbook() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased animate-page-enter">
      <section className="flex-grow pb-24 md:pb-8">
        {/* Hero Section */}
        <section className="relative w-full h-[70vh] min-h-[500px] mb-stack-lg reveal-on-scroll">
          <img
            alt="Slow living hero"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida/AP1WRLti0xii382a0hO0Ib07h-qi56XRyR5lG9ZtMQV3Z3NuVmZkwf-ptHgW7Q65HdRTO4FdSaZaj-UgGdzAXSx1653fVRSK87xueYc4_Jfbpge4Z39DZDWdNX8JqlaRryh-Gmh_05Mc4v6YHoYzes8ONHjsfOb04zbSqXVeOt4J6B1uLR6X2WaohG25AfV4yrRPF7wyKkxUQRnMd-UrzbdwM1CHgBzNc_jkJaH4fJdGdZzczserbx6ip47R"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-center text-white px-margin-mobile">
              <h2 className="font-headline-xl text-headline-xl mb-stack-sm drop-shadow-md">
                The Art of Slow Living
              </h2>
              <p className="font-body-lg text-body-lg opacity-90 tracking-widest uppercase">
                Volume I
              </p>
            </div>
          </div>
        </section>

        {/* Intro Paragraph */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-lg text-center reveal-on-scroll">
          <p className="font-headline-md text-headline-md text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            &quot;Embracing the tactile beauty of natural materials, each piece
            tells a story of artisanal craft and quiet reflection. We invite you
            to slow down and savor the simple elegance of everyday
            objects.&quot;
          </p>
        </section>

        {/* Section 1: Earth & Form */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-lg reveal-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-7 relative group">
              <img
                alt="Earth and Form collection ceramics"
                className="w-full h-[500px] object-cover rounded-xl shadow-lg"
                src="https://lh3.googleusercontent.com/aida/AP1WRLv5Z1EuRGPtTmA_T1_E5M-Zv2wR8iHCtjDC1hATHthc99CcMkyqmtiqwS9-ASE2ptj-iu6Q7sBtQiJrsabTUWg4Wr-lazZE0ABCgVT0Hhr9tl4AYg6ff_RQzVBYCdEXlvZQz6VizS_2Iq4-d9ciXb9H7JBeSH0cEqNVTNohV8M3lJida2e7r2Tn3VmtARFyWgeJzvMMI1_DjqOuGa5t4TpsU4aeB_M8mj0A-GWZCupyO4OtCNJK1ZW3Dg"
              />
            </div>
            <div className="md:col-span-5 md:pl-stack-md flex flex-col justify-center">
              <span className="font-label-md text-label-md text-primary uppercase tracking-wider mb-base">
                Collection
              </span>
              <h3 className="font-headline-lg text-headline-lg mb-stack-sm">
                Earth &amp; Form
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
                Discover the raw, unrefined beauty of terracotta and clay. Our
                Ceramics Collection highlights the natural textures and earthy
                tones that ground a space, bringing warmth and character to your
                home.
              </p>
              <Link
                to={"/shop/ceramics"}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "auto" });
                }}
                className="self-start px-6 py-3 bg-primary text-on-primary font-label-md text-label-md rounded-full shadow-sm hover:shadow-md hover:bg-primary/90 transition-all active:scale-95 duration-200"
              >
                Shop Ceramics
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2: Curated Dwellings */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-lg reveal-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center flex-col-reverse md:flex-row">
            <div className="md:col-span-5 md:pr-stack-md flex flex-col justify-center order-2 md:order-1 mt-stack-md md:mt-0">
              <span className="font-label-md text-label-md text-primary uppercase tracking-wider mb-base">
                Editorial
              </span>
              <h3 className="font-headline-lg text-headline-lg mb-stack-sm">
                Curated Dwellings
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
                A study in minimalist curation. Arrange pieces that speak to
                you, allowing negative space to highlight their sculptural
                forms. It’s about quality over quantity, finding harmony in
                purposeful design.
              </p>
            </div>
            <div className="md:col-span-7 relative group order-1 md:order-2">
              <img
                alt="Curated dwellings interior"
                className="w-full h-[600px] object-cover rounded-xl shadow-lg"
                src="https://lh3.googleusercontent.com/aida/AP1WRLsGKnSvfZqhyFLWzOZS2QCQCrY4wm3sXRIOhF9KwEjrq7ZVXGgp1-VvTpw5W_i7zN0v6VzTl73guLw17fQb_WYRPr4ifk2r5hC5HjlbD3M4oggwaqsSnJyCvcnUSJJrSSVNG1T6Ukwhz1n8v-FJy50ObjXNi20UuK-ovSCCLCYWxgjQ7o4goBnWt6G4O9r6Yl5MVHqjubKP5KpNXsXos6Wlq92R7mBd840fCI9XNzhNXWwmbcQZM2UlSA"
              />
              {/* Hotspot */}
              <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-8 h-8 bg-surface/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-surface transition-colors shadow-md group-hover:scale-110 duration-300">
                <span
                  className="material-symbols-outlined text-primary text-sm"
                  data-icon="add"
                >
                  add
                </span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
