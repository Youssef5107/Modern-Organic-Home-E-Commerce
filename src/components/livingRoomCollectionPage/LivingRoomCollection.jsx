export default function LivingRoomCollection() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-32 animate-page-enter">
      {/* Header & Description */}
      <section className="mt-stack-md md:mt-stack-lg mb-stack-md reveal-on-scroll">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-label-md text-label-md text-primary mb-2 uppercase tracking-widest">
              Collection
            </p>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">
              Curated Comfort
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Thoughtfully selected pieces designed to ground your space. From
              hand-finished walnut to organic textiles, our living room
              collection celebrates the harmony of natural materials and modern
              design.
            </p>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
            <span className="text-primary">12</span> Products
          </div>
        </div>
      </section>

      {/* Filter / Sort Bar */}
      <section className="sticky top-16 z-30 bg-surface/90 backdrop-blur-sm py-4 mb-stack-md border-y border-outline-variant/30 reveal-on-scroll">
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-4">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors font-label-md text-label-md">
              <span className="material-symbols-outlined text-sm">tune</span>
              Filters
            </button>
            <div className="h-6 w-px bg-outline-variant/50 hidden md:block"></div>
            <div className="flex gap-2">
              <span className="px-4 py-2 rounded-full bg-secondary-container/30 text-on-secondary-container border border-secondary-container font-label-sm text-label-sm">
                Seating
              </span>
              <span className="px-4 py-2 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-colors font-label-sm text-label-sm cursor-pointer">
                Tables
              </span>
              <span className="px-4 py-2 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-colors font-label-sm text-label-sm cursor-pointer">
                Textiles
              </span>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-on-surface-variant font-label-md text-label-md">
            Sort: Featured
            <span className="material-symbols-outlined text-sm">
              keyboard_arrow_down
            </span>
          </button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter reveal-on-scroll">
        {/* Product 1: Solid Walnut Coffee Table */}
        <div className="group flex flex-col cursor-pointer">
          <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-xl bg-surface-container">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="A premium solid walnut coffee table with a smooth, hand-finished matte texture, positioned in a bright, minimalist living room with floor-to-ceiling windows. The lighting is warm and natural, casting soft, diffused shadows. The aesthetic is modern organic with a palette of deep wood tones and creamy neutrals."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCANTj-W0xA0EeWtY83j6w9SCCku4uQWoamVYUrAWtiOBv7wx2zH0PZSXu_Y_IQeWGJR57VT8tkPAMZGeGLTSqYVmhvguHDB6_1cvQ8gy48Y3CBrIzbDQt0INcDxb1KR2Otqwa_mtMssChWx7wRGQ7r6dkOk8q-n2VUPCLAZlbPCybNhWOiC9uqgrvzMmj8qNZhEMc8buFR1nWLwlIwZMu_f7MP6vCX2I2HVnFmJVI0bPrFzeaG00o"
            />
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined">favorite</span>
            </button>
            <div className="absolute bottom-4 left-4 bg-primary text-on-primary font-label-sm text-label-sm px-3 py-1 rounded-full">
              New Arrival
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
              Solid Walnut Coffee Table
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Furniture
            </p>
            <p className="font-label-md text-label-md text-primary mt-1">
              $840.00
            </p>
          </div>
        </div>

        {/* Product 2: Textured Wool Throw */}
        <div className="group flex flex-col cursor-pointer">
          <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-xl bg-surface-container">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="A thick, chunky knit textured wool throw in a soft oatmeal color, draped elegantly over the arm of a linen sofa. The scene is cozy and serene, with late afternoon sun filtering through a sheer curtain. The visual style is high-end lifestyle photography, emphasizing tactile warmth and organic materials."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSG7kPDHErRgzCgdFA6yJsgfJZQkmn35AR29DrAm7dJcDOHTUJId9BwDZbRyMIJ_0-Vl3Dup5Yp-l2VbRYEtmJDIwwBEwU8rmccsITYodCU--KsngRjM9dOtO-hwGOUrnxKRsdXCq1LVDJd8WDFa_QD3zLV2XGVg5ehDmsfES0xz7QiWe2DyBuB92RnfJOrdb_UXIbj2BK74etLACluGaLvFI4n2_YjydCDzPYYPB2aRDMQWRrb4Q"
            />
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
              Textured Wool Throw
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Textiles
            </p>
            <p className="font-label-md text-label-md text-primary mt-1">
              $125.00
            </p>
          </div>
        </div>

        {/* Product 3: Sculptural Ceramic Vase */}
        <div className="group flex flex-col cursor-pointer">
          <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-xl bg-surface-container">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="A hand-formed sculptural ceramic vase with a grainy, unglazed surface and an asymmetrical silhouette. It sits on a minimalist shelf against a warm grey lime-wash wall. The lighting is dramatic yet soft, highlighting the tactile imperfections of the clay. Colors are earthy terracottas and soft browns."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG7EDGPUGMYhPBXK_QaiPOQfZZwSqgcCjBr0YXT0Z4B86wEEtb8MVNubdaJAnm4WnRXg_elFhk2N0058YVtOafyzn_udQpRshG7ZbrRyzZJ0S8x1Gfrdb_cVEqWKUidfbPf50MW6PKdy5h0DLy1zueXnILfYydvNwDEU5Tv_fAp_GyHtcbAVjbHFFD_aN7YDIZ0znDvpq1y5hvibjys8CrUWJYs1GHynopZJA4PWGENdrd96UVJu0"
            />
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
              Sculptural Ceramic Vase
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Accessories
            </p>
            <p className="font-label-md text-label-md text-primary mt-1">
              $68.00
            </p>
          </div>
        </div>

        {/* Product 4: Linen Slub Sofa */}
        <div className="group flex flex-col cursor-pointer">
          <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-xl bg-surface-container">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="A low-profile linen slub sofa in a warm sand color, featuring deep cushions and a modular design. It is placed on a large jute rug in an airy, sun-drenched room. The image conveys a sense of quiet luxury and relaxed living, with a clean architectural background and natural oak accents."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE2eKuuyKkqPczoebJ56wEsRy5wRVDIEN5SA-UIQMVzJs7QKhHiqqd0HwpM6F_DdqfLJgTmXx623wVfCkZPCJIipD8UzN3UN7ciduaAKWwh6HoEvYwXBt1UDYS31dlzOW3S9ZfH4WXh6DQfmrywVl7fGfWIVFQMjdz64NmYv9H5UlD4W11FQFTz9c6lJUqdlT31xJklwfvfJ0pZPiHnM1I3nbVuaL7GX20aMQ-rmSKH6I77Er93tM"
            />
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
              Linen Slub Sofa
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Furniture
            </p>
            <p className="font-label-md text-label-md text-primary mt-1">
              $2,450.00
            </p>
          </div>
        </div>

        {/* Product 5: Hand-Woven Jute Rug */}
        <div className="group flex flex-col cursor-pointer">
          <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-xl bg-surface-container">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="A close-up shot of a hand-woven jute rug, showing the intricate natural fiber patterns and earthy tan color variations. The lighting is side-lit to emphasize the three-dimensional texture. The overall feel is organic, rustic, and grounded, consistent with a high-end sustainable home brand."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_Bpww44TsOZJTAI7ZsKuPNEkBjrz7LTTScCU56liGnvVJg0WtqZnrqh3u456pqScUSJ0I3Nrobp81mymqLD_wJ1pF7VSng1ieGeGD_PdfUWQ1uFzP5Ny5hqk9W2G0SSBQM_vSv4VqH778Ec6KQW11j2-kPFOFM5Ajou-wbGuBL8Bs8hVCBjw9jnuZqMxwotpl-uoM7MnGuWU1TuuSFJxNy69_e_HVmu2A-lug0c743jX6mKHwg3g"
            />
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
              Hand-Woven Jute Rug
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Textiles
            </p>
            <p className="font-label-md text-label-md text-primary mt-1">
              $420.00
            </p>
          </div>
        </div>

        {/* Product 6: Matte Black Floor Lamp */}
        <div className="group flex flex-col cursor-pointer">
          <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-xl bg-surface-container">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="A minimalist matte black floor lamp with a slender stem and a conical shade. It stands next to a wooden lounge chair in a dimly lit corner, creating a focused pool of warm light. The aesthetic is sophisticated and sculptural, using a dark-mode-inspired contrast against neutral walls."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg43E2ugfrgqABzXyo4iAcnmVyjh2euF6cYGksJMYqwoIquPcSjxqrtUB2t4POhB6I2JUQ9ubh_B32XEiCE9nt0tmqYUu2APPhLH7w2miNKbB7lQya6gxMDYJaWkuHC_2Add0khCNFYKE2Dk0o9LNTCbjfDz1KOnJ9tfV_1vWtnCmpNIw6-dYuqwAXIbJjKxawiHAZziyBSwdayI7fPJxh4mzZ_IvzfZ_MZnADe2-H_M4pP56vLLo"
            />
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
              Matte Black Floor Lamp
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Lighting
            </p>
            <p className="font-label-md text-label-md text-primary mt-1">
              $290.00
            </p>
          </div>
        </div>

        {/* Product 7: Oak Sideboard */}
        <div className="group flex flex-col cursor-pointer">
          <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-xl bg-surface-container">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="A white oak sideboard with slatted doors and clean lines, showcasing the natural wood grain. Several organic-shaped ceramic pieces are arranged on top. The room is styled with a large green plant, creating a fresh, breathable atmosphere that embodies the modern organic lifestyle."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcKPz6z11DlV_bvDbV_hiiwAoCpPJGpLCwls3krq6Y1J1pox-4cbbgDbgNW7qyQCXeXge9yFpymjnM0pPM1bmnQwY3lvz_zw0m1QEDTE0lN_wFc1Dro9GAPcz1sJOKM1JklIDGYhK1_lrQFD68YtrRd-qOMfLba2Yy3bTNbbz9ESCIFyHwVyffGDASxBmNSXYtz84kxUZ3Es8Jyg68J9DAZLarJi83pnLaZn0bWVthWBCFbb3c-iQ"
            />
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
              Oak Sideboard
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Furniture
            </p>
            <p className="font-label-md text-label-md text-primary mt-1">
              $1,150.00
            </p>
          </div>
        </div>

        {/* Product 8: Scented Soy Candle */}
        <div className="group flex flex-col cursor-pointer">
          <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-xl bg-surface-container">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="A scented soy candle in a hand-crafted dark amber glass jar, with a minimalist cream label. It is lit, with a small steady flame, sitting on a wooden coaster. The background is softly blurred, focusing on the warm glow and the premium packaging. The scene feels intimate and relaxing."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrnXUdx16bjaaZPHfTouA9WYR-ZXxI5hf-4ilHu9nFRQ2nTZOTbBMO9OWd5a4AWry_WaqpL0jKAUaoNDtqNzjTAbcmC_ErYDp3yqrAFy_6vWKJAWvgCwElZT-lXMdvMD_3k_Z0X8IHnQJizwK9DEVFsyfeKvwAxUct_RZtX6ovEVqci0N2Rh9BNe6I3sEljcrZ5ebfaev3nmVMOz-0TF0R2h9fXHBoOg34XS-pWFFBrFWZmhco2TY"
            />
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
              Amber &amp; Oak Candle
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Home Fragrance
            </p>
            <p className="font-label-md text-label-md text-primary mt-1">
              $34.00
            </p>
          </div>
        </div>
      </section>

      {/* Pagination / Load More */}
      <div className="mt-stack-lg flex flex-col items-center gap-6">
        <p className="font-body-md text-body-md text-on-surface-variant">
          Showing 8 of 12 products
        </p>
        <div className="w-64 h-1 bg-surface-container rounded-full overflow-hidden">
          <div className="w-2/3 h-full bg-primary transition-all duration-1000"></div>
        </div>
        <button className="px-8 py-4 bg-primary text-on-primary rounded-full font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/10">
          Load More Pieces
        </button>
      </div>

      {/* Editorial Lookbook Section */}
      <section className="bg-surface-container-low py-stack-lg mt-stack-lg rounded-2xl reveal-on-scroll">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden group cursor-pointer">
            <img
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="A large-scale editorial shot of a complete living room setup featuring the entire collection. A walnut coffee table sits in the center, a linen sofa is draped with a wool throw, and ceramic vases are perfectly placed. The room has high ceilings and large windows with soft morning light. The vibe is quiet luxury, slow living, and impeccably curated."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFc3lfmR4XLX66k15C-Wf_QvSQzSKccziABO44X27IFu0GEu_mZvW-3aAmszYgAGnLz4kWbsTHTSONboiIWk8Bk1Qo5q32IYKZB5tLHJDNUywoNii9ikwVcZj1iDAjc7Kdx56nJVjVqTWHZ3kaHy6oMkmIEybp6sgRoT38LXIflD0i83n-2P3ZCEulSFk3_8NACcUA9yRvIUrYAATmvCLGHtupC__l5VhQA22RIfx2DxiutZWxagY"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white">
              <h2 className="font-headline-lg text-headline-lg mb-2">
                The Organic Living Story
              </h2>
              <p className="font-body-lg text-body-lg opacity-90 max-w-lg mb-6 hidden md:block">
                Discover how to blend textures and tones for a home that feels
                truly lived-in yet refined.
              </p>
              <button className="flex items-center gap-2 group/btn font-label-md text-label-md uppercase tracking-widest border-b border-white pb-1">
                Read Lookbook
                <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
