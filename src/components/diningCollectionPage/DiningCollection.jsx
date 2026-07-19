export default function DiningCollection() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-stack-md pb-32 animate-page-enter">
      {/* Collection Intro */}
      <section className="mb-stack-lg reveal-on-scroll">
        <div className="max-w-2xl">
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Elevate your gathering rituals with our curated collection of
            handcrafted kitchenware. From artisanal ceramics to sustainably
            sourced wood, each piece is designed for the tactile beauty of daily
            use.
          </p>
        </div>
      </section>

      {/* Filter & Sort Bar */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-gutter mb-stack-md reveal-on-scroll">
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 md:pb-0">
          <button className="whitespace-nowrap px-4 py-2 rounded-xl bg-secondary-container/30 text-primary font-label-md text-label-md border border-primary/10">
            All Dining
          </button>
          <button className="whitespace-nowrap px-4 py-2 rounded-xl bg-surface-container-low text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant/30 transition-colors">
            Ceramics
          </button>
          <button className="whitespace-nowrap px-4 py-2 rounded-xl bg-surface-container-low text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant/30 transition-colors">
            Serveware
          </button>
          <button className="whitespace-nowrap px-4 py-2 rounded-xl bg-surface-container-low text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant/30 transition-colors">
            Textiles
          </button>
        </div>
        <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 border-outline-variant pt-4 md:pt-0">
          <button className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
            <span className="material-symbols-outlined text-sm">tune</span>
            Filter
          </button>
          <button className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
            Sort: Featured
            <span className="material-symbols-outlined text-sm">
              expand_more
            </span>
          </button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-gutter gap-y-stack-md reveal-on-scroll">
        {/* Featured Editorial Card */}
        <div className="col-span-2 row-span-1 md:row-span-2 relative group overflow-hidden rounded-xl bg-surface-container mb-stack-sm md:mb-0">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 p-8 z-20">
            <span className="inline-block px-3 py-1 bg-surface/20 backdrop-blur-md rounded-full text-on-primary font-label-sm text-label-sm mb-4">
              Editorial Lookbook
            </span>
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary mb-2">
              The Art of Slow Dining
            </h3>
            <p className="text-on-primary/80 font-body-md text-body-md max-w-sm mb-6">
              Discover how tactile ceramics transform a simple meal into a
              mindful experience.
            </p>
            <button className="px-6 py-3 bg-on-primary text-primary rounded-full font-label-md text-label-md hover:opacity-90 transition-opacity">
              Explore Story
            </button>
          </div>
          <div
            className="h-full min-h-[400px] w-full bg-cover bg-center"
            aria-label="A warm, sun-drenched close-up shot of a rustic wooden dining table set with organic ceramic bowls, linen napkins, and handcrafted glassware. The lighting is soft and golden, highlighting the textures of the materials. Minimalist and high-end lifestyle aesthetic with earthy tones like terracotta and sage."
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7Li7wbBl9mw2RtRuu0H04ZRy1iN03Ly-fbBdbjqoPnFApceIccpOMQ5HE_Ah_6SUTe2TihZZdWI8xtTnYez3QlOPLx5Z3dzKTQKb1ngkEsXINjKwrZJhLVh7nt99WlMxZG1ihwEK4rSwrvdMzZWaHcF9VskTTlItpIP4NStseJyMN1q8J1RS6SHu8XWHvletVjqWmOe6dCP_WCckolvqkSgEs7q_Lg0eFmFuvSFjt-v_o09LE188')`,
            }}
          ></div>
        </div>

        {/* Product Card 1 */}
        <div className="group flex flex-col cursor-pointer">
          <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-xl bg-surface-container product-card-shadow transition-all duration-500">
            <img
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              alt="A studio photograph of an Earthen Pitcher with a matte sand-colored glaze and a textured organic shape. The pitcher is set against a warm grey background with soft, diffused shadows. The lighting mimics natural window light, creating a serene and grounded atmosphere."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc_a2tD9wZLt1wv_CAFBCjf8MPBIG4AQx7nsoNCsrtKN1UDfn8NZCgUVGFsW20-fouafruhbukfKrwgn5C1h9XRbjj6XM7UL3U6VDCwHB_IoZonSvaEUInr8zNndDZO-_-ytkNiDkjhRC_Oq9uJYl2FdvZ6Ov_Fsd-kBYBObUp2Fd-VVEo4LnXAk9KA_fUoGeV9ahsCkWRcfzUsWwEo1VO6NHLrTKK57lGqxqBry-wMWlTyHdx5ps"
            />
            <button className="absolute top-4 right-4 w-10 h-10 bg-surface/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
          <div className="flex flex-col gap-1 px-1">
            <div className="flex justify-between items-start">
              <h4 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                Earthen Pitcher
              </h4>
              <span className="font-label-md text-label-md text-on-surface-variant">
                $68
              </span>
            </div>
            <p className="font-label-sm text-label-sm text-outline">
              Hand-thrown stoneware
            </p>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="group flex flex-col cursor-pointer">
          <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-xl bg-surface-container product-card-shadow transition-all duration-500">
            <img
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              alt="A top-down view of a Reclaimed Oak Serving Board with rich grain patterns and a live edge. It sits on a minimalist white stone surface with a sprig of dried lavender nearby. High-key lighting emphasizing the natural wood texture and organic luxury."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdjwenHbuBYF2cQSXrinKHRpoDWjisgeaCoLXiJfj8r-Gz2rP2dEVXHh4nSzPVmRNt9ik3OEb7yXA-DhoDkUOQ-VvYn7K1doK-KRo7Ta1Ijknrx2aSgNhevw114rz9mw3BLCltOq0b5kh-FpCEPZbZhUjF9MvqiZQWpFoRYyUle8caE8PCY2NYQM_o7GMOMR4XBlAllajKhIjwzZKSSm2zaKixUPgha3V0niac9IgQOe8hY6dIRyY"
            />
            <button className="absolute top-4 right-4 w-10 h-10 bg-surface/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
          <div className="flex flex-col gap-1 px-1">
            <div className="flex justify-between items-start">
              <h4 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                Reclaimed Oak Board
              </h4>
              <span className="font-label-md text-label-md text-on-surface-variant">
                $120
              </span>
            </div>
            <p className="font-label-sm text-label-sm text-outline">
              Sustainably harvested
            </p>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="group flex flex-col cursor-pointer">
          <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-xl bg-surface-container product-card-shadow transition-all duration-500">
            <img
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              alt="Set of four handcrafted terracotta nesting bowls with a glossy white interior glaze and a raw clay exterior. The bowls are stacked artfully, showing the contrast between the textures. Soft focus background with neutral warm tones."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdoChxnxjGJM3K-FTnIUB80vUhPTmsTR-kEFt9HcfnZDtSMETYpTMmBrsHmtWeU_UwfO_V-oNG8a4oFW8ZKCOjRSmPZnbCLRpd1m4prIMfoQl94-IRz6ldDfUNPvcYUw5AI7BJgtMLMtGXClCqL5_ccRMu2WPUQWno0r1F1_ssVswIxqZI7AlNrhiEJQzqr8X6EAWn59QF2A9v0waU03--2g7uBvTh2XTIuH-kEldqSE-pN0qPkNU"
            />
            <button className="absolute top-4 right-4 w-10 h-10 bg-surface/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
          <div className="flex flex-col gap-1 px-1">
            <div className="flex justify-between items-start">
              <h4 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                Terracotta Nesting Bowls
              </h4>
              <span className="font-label-md text-label-md text-on-surface-variant">
                $85
              </span>
            </div>
            <p className="font-label-sm text-label-sm text-outline">Set of 4</p>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="group flex flex-col cursor-pointer">
          <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-xl bg-surface-container product-card-shadow transition-all duration-500">
            <img
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              alt="A close-up of a hand-forged brass spoon resting on a slate grey ceramic plate. The brass has a soft, brushed patina that glows in the subtle light. Minimalist kitchenware aesthetic with focus on the metallic texture and organic shape."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhCVH5o7eG1-LuAa3xBaAe6DsGruYeprfBy_ptg4OzLXn0_zEIlbAg756W2gnDnrYVs_xhdtUjL2upYB4OiYK0RiiofIVit3wVSPcmJo47zg56tGcWsNhzxrCjPA1cFhCyxiaRTxprLHHsSdMCDB7fBxRqa1nmPD2RSUFHtyySbLxgUI76sTb7-0EF7ktqacXrVVquadwZd1uC0c8DhoHG4K9Mq9_DnU0fEc8i6n-YnTDJGII2pS4"
            />
            <button className="absolute top-4 right-4 w-10 h-10 bg-surface/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
          <div className="flex flex-col gap-1 px-1">
            <div className="flex justify-between items-start">
              <h4 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                Forged Brass Spoon
              </h4>
              <span className="font-label-md text-label-md text-on-surface-variant">
                $32
              </span>
            </div>
            <p className="font-label-sm text-label-sm text-outline">
              Aged patina finish
            </p>
          </div>
        </div>

        {/* Product Card 5 */}
        <div className="group flex flex-col cursor-pointer">
          <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-xl bg-surface-container product-card-shadow transition-all duration-500">
            <img
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              alt="A stack of folded linen dinner napkins in muted sage green and oatmeal shades. The fabric texture is crisp yet soft, with fine hemstitched edges. Natural morning light creates gentle shadows between the layers."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmPxdJej48lU8Qpp8DcGbM2tlHo5wDpz6BSO9X0KcU4-RsfdUyrSVewvm2Np5z4hXaP104ZF7qBm7qmt922CxZxIBWE2lm1klI0R0oEwdTYnApLKu1pIg_2cv64PzuP0VwSV6LfgsASHGq0BjY4emAXgWKJiG1cH8CnmLnid9pdmpsOiH7j_ABfZVHmrEX4EcE_NMnhO5WgH57M9DMENW_0lHloJgwI1V1tVfaXisPkDSSAR6Qsp4"
            />
            <button className="absolute top-4 right-4 w-10 h-10 bg-surface/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
          <div className="flex flex-col gap-1 px-1">
            <div className="flex justify-between items-start">
              <h4 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                Washed Linen Napkins
              </h4>
              <span className="font-label-md text-label-md text-on-surface-variant">
                $45
              </span>
            </div>
            <p className="font-label-sm text-label-sm text-outline">
              European Flax, Set of 2
            </p>
          </div>
        </div>

        {/* Product Card 6 */}
        <div className="group flex flex-col cursor-pointer">
          <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-xl bg-surface-container product-card-shadow transition-all duration-500">
            <img
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              alt="A tall, slender stoneware vase with a charcoal black reactive glaze. It holds a single dried eucalyptus branch. The vase stands on a warm cedar wood shelf against a neutral plastered wall. Tactile and minimal design."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIN52M59yuduK-zxslPrbAGWW0ITyO1LSAROVW9Odr0FncZF6y_bLZ8gU7CtmvhytRSnr8hF6lInt0tSG5Rx5ftCClHQux9A1Vz-5zeq1k5HsKxJ_P76UTxjKvphXhQlvHkF4GC0cb_WMrVZNb1-uDguvhbRcZzYweTwqEyQq2eM3BX1HuQ-50jMcQXtSbJtZhaT8KN1olOyBke5E28BSa7uZW1IlSVNLfo0FM7KfyyeCpxfKGPG4"
            />
            <button className="absolute top-4 right-4 w-10 h-10 bg-surface/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
          <div className="flex flex-col gap-1 px-1">
            <div className="flex justify-between items-start">
              <h4 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                Charcoal Stem Vase
              </h4>
              <span className="font-label-md text-label-md text-on-surface-variant">
                $54
              </span>
            </div>
            <p className="font-label-sm text-label-sm text-outline">
              Matte reactive glaze
            </p>
          </div>
        </div>
      </section>

      {/* Pagination / Load More */}
      <div className="mt-stack-lg flex flex-col items-center gap-6">
        <p className="font-label-sm text-label-sm text-outline">
          Showing 8 of 32 items
        </p>
        <div className="w-48 h-1 bg-surface-container-highest rounded-full overflow-hidden">
          <div className="w-1/4 h-full bg-primary transition-all duration-500"></div>
        </div>
        <button className="px-8 py-3 bg-surface border border-outline/20 text-on-surface font-label-md text-label-md rounded-full hover:bg-surface-container-low transition-colors active:scale-95">
          Load More Pieces
        </button>
      </div>
    </div>
  );
}
