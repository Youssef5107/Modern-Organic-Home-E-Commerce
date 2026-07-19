export default function CeramicsCollection() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-md md:py-stack-lg min-h-screen animate-page-enter">
      {/* Header & Editorial Intro */}
      <section className="mb-stack-lg grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end reveal-on-scroll">
        <div className="lg:col-span-7">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4 block">
            Handcrafted Excellence
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6 leading-tight">
            Artisanal vessels for the{" "}
            <span className="italic text-primary">curated home.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Discover our permanent collection of functional stoneware and
            decorative objects. Each piece is hand-thrown or slab-built by
            master potters using ethically sourced clays and natural pigment
            glazes.
          </p>
        </div>
        <div className="lg:col-span-5 hidden lg:block">
          <div
            className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl bg-cover bg-center"
            role="img"
            aria-label="A macro shot of a master potter's hands shaping a wet clay vase on a wooden spinning wheel. The lighting is warm and natural, coming from a nearby workshop window, highlighting the texture of the terracotta clay and the water droplets."
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAx1bbyL8lHVcVUGUK-z1bPVlHDRigP5HdGBMQRIK57s1WbS3HuLLtxQ3mmdyzv12pFmKUj3ILFQZWDGqKuaSDep-DLrLYbDsdtK53YuaRM0XAp3Tuy32ltg6llEDnirbqNR4_-w3XuvUIpeBGJ3Zvans-rvMlmdQ-0i5Ariuk9-ZzauRMTrwLE4NA46ZAplcnjWH8Ci3m8-9AyAbz18XvI5tRz_pcvs7NqhkBrBjaJ4e744QrIb00')",
            }}
          ></div>
        </div>
      </section>

      {/* Filter & Sort Bar */}
      <section className="sticky top-16 z-40 bg-background/80 backdrop-blur-md py-4 mb-stack-md reveal-on-scroll">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant pb-4">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <button className="px-6 py-2 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md hover:opacity-90 transition-opacity whitespace-nowrap">
              All Collections
            </button>
            <button className="px-6 py-2 rounded-full text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant transition-colors whitespace-nowrap bg-surface-container-low">
              Vases
            </button>
            <button className="px-6 py-2 rounded-full text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant transition-colors whitespace-nowrap bg-surface-container-low">
              Tableware
            </button>
            <button className="px-6 py-2 rounded-full text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant transition-colors whitespace-nowrap bg-surface-container-low">
              Decorative
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                tune
              </span>
              Filter
            </button>
            <div className="h-4 w-[1px] bg-outline-variant"></div>
            <button className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">
              Sort: Newest
              <span className="material-symbols-outlined text-[20px]">
                expand_more
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter reveal-on-scroll">
        {/* Product Card 1: Featured Large */}
        <div className="lg:col-span-2 product-card group">
          <div className="relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] rounded-xl overflow-hidden bg-surface-container mb-4 cursor-pointer">
            <img
              className="product-image w-full h-full object-cover transition-transform duration-700 ease-out"
              alt="A group of handcrafted ceramic vases in varying sizes and earthy tones including terracotta, sage green, and cream white."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk0jKdAY-ROqADg-308IK14qb7jBa_Q-fVXXWCG_9Up2RCl9f2qlzguPZRw8WZ3p_sdnhvh2ZmiBZ7yLnr0WYqapYyznAfK9fJULyBNlg7mfG67d6z6O8EctSuStrNy-GFCwGUEjOx-p0OS9Dq2nZj7Xv7ott3aKtBH9myyChUTF8bT8GKkqj6UkSS2bfctOJVdaOrqLMnW_nloimx3xwZP5o3BfCNDFrcCtqY4K7fqCGNb4iI84w"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-on-primary font-label-sm text-label-sm px-3 py-1 rounded-full uppercase">
                Signature Piece
              </span>
            </div>
            <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity active:scale-90">
              <span className="material-symbols-outlined text-primary">
                add_shopping_cart
              </span>
            </button>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-1">
                Handcrafted Ceramic Vase
              </h3>
              <p className="font-label-md text-label-md text-on-surface-variant">
                Signature Sculptural Series
              </p>
            </div>
            <span className="font-label-md text-label-md text-primary">
              $185.00
            </span>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="product-card group">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-container mb-4 cursor-pointer">
            <img
              className="product-image w-full h-full object-cover transition-transform duration-700 ease-out"
              alt="An earthen pitcher with a wide handle and a textured, unglazed exterior showing the raw beauty of the natural clay."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKblhZ9obhUpH6rpxB19Q0syB7mJXWI0esYR9FuDH0zOacEJeCYWeCU-1YeQW9saf72up1SMFckeoNfmw6llUR3I5-HDOuQ8LuogmvLcHVi7OEWUp5NMcBXcJvT4w0LLMQFQ7x3dG5uWNwsLZa60HXHai5YLx3f-aAPWCPGjx-KFCDz_NU165GTYPVfG3CUGG2J1EM57hvvKGbF3jGLlSa7gzZQX_Hd4K-UCiNn4XnQzHzKYy-1zw"
            />
            <button className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                favorite
              </span>
            </button>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-label-md text-label-md text-on-surface mb-1 uppercase tracking-wider">
                Earthen Pitcher
              </h3>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Natural Sandstone Glaze
              </p>
            </div>
            <span className="font-label-md text-label-md text-primary">
              $92.00
            </span>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="product-card group">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-container mb-4 cursor-pointer">
            <img
              className="product-image w-full h-full object-cover transition-transform duration-700 ease-out"
              alt="A nested set of three ceramic basin bowls in varying shades of basalt grey and charcoal."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeRCLZPxdl9GQWCJ5AxWTBBhkYW5fARcFJOr0oIX8MAGOFypDhc_HNxGXX_tLs4tBT7LreRcS523GCc-P3xxNY0cY_w4wNbszN4No6BkKmud_AMsdLHtmQJWN7fKlCC-41g_vtRtqWpWwRzY8bBPuir6gdQANKhLwlWP2titdwEzfj_BREFvfiz-FE7gmmW8iGoqFRsYtS0JkouhPn1hd9IYcW-fDgPFOsyG_Qz8iY_jasWlD9q_M"
            />
            <button className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                favorite
              </span>
            </button>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-label-md text-label-md text-on-surface mb-1 uppercase tracking-wider">
                Basin Bowls
              </h3>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Set of 3, Charcoal Matte
              </p>
            </div>
            <span className="font-label-md text-label-md text-primary">
              $145.00
            </span>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="product-card group">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-container mb-4 cursor-pointer">
            <img
              className="product-image w-full h-full object-cover transition-transform duration-700 ease-out"
              alt="A tall, slender terracotta amphora with delicate handles and a weathered finish."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBINY8kcQAH0zjg-OCX6Hs4GZ7CU9QwXQtvuB2AhocV7-F_IMLYjCQQNxp4DTkvcXBS-E__2HwkOanP43nrROxh6ordWKHuOBCSQSfhZXDRGXa5ElcUkz_n-pZMa1XU80oUwQ00ULkH6sWmRPTm1ytdTi_G8_cPgjq-ZPIxlpLNDBZJVDX_84ilqL-UhSpkcdLxmHH54knrfgPGpmdyhGTZ0ibYvX9eiPSpzseRvdiOG3dySf8J1OM"
            />
            <button className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                favorite
              </span>
            </button>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-label-md text-label-md text-on-surface mb-1 uppercase tracking-wider">
                Modern Amphora
              </h3>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Terracotta &amp; Iron Wash
              </p>
            </div>
            <span className="font-label-md text-label-md text-primary">
              $210.00
            </span>
          </div>
        </div>

        {/* Product Card 5 */}
        <div className="product-card group">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-container mb-4 cursor-pointer">
            <img
              className="product-image w-full h-full object-cover transition-transform duration-700 ease-out"
              alt="A collection of small ceramic incense burners in speckled cream and soft sage green."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZvbjgINTCI70IGcOMw7ro5qzDeL5tA8A1EOice2vsu7bElNwpCgmn5HUhwLcDM4fJlMF4dz_zxuo19ir_jq2r-2Pwr3tVUS5T9vZ9jPY7TK9pjXppKKRvhc58BtD6T2gPhBaSnmf2ANrD-91DnxhE2VutDS6WN3-alh7yg8DUq0tLG-NsUuVikqo7I5s5dne8daGICHsrhjpEku4VmoLydCDHnTywdRdu56csepSN1JBVP5z4sxk"
            />
            <button className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                favorite
              </span>
            </button>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-label-md text-label-md text-on-surface mb-1 uppercase tracking-wider">
                Ritual Burner
              </h3>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Speckled Stone Glaze
              </p>
            </div>
            <span className="font-label-md text-label-md text-primary">
              $45.00
            </span>
          </div>
        </div>

        {/* Product Card 6 */}
        <div className="product-card group">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-container mb-4 cursor-pointer">
            <img
              className="product-image w-full h-full object-cover transition-transform duration-700 ease-out"
              alt="Minimalist ceramic espresso cups with no handles, featuring a beautiful gradient glaze."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIXR3GNE2c5MYwX-fLOGmW_hgJKj1pEPa6l1fcngFsFm0vnYcbYwFQtcSydVaBXgkCNiXPJjWRirLHlQTREm_hGV_5w8U5zZM3lhEnaOU6Bmf8BMmPY4bb83rwEYJ1aSTwY05AaIXF3atsG6BBohjfL6dy2i2WlDSC3GMckQAgy2AGUwXio921e30F020kELX6pfXfeKuP_NRlmMGbrnowtiO-W2b3RE3ISHABMdsQWoWlujuYgMM"
            />
            <button className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                favorite
              </span>
            </button>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-label-md text-label-md text-on-surface mb-1 uppercase tracking-wider">
                Sipping Cups
              </h3>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Duo Set, Indigo Wash
              </p>
            </div>
            <span className="font-label-md text-label-md text-primary">
              $64.00
            </span>
          </div>
        </div>

        {/* Product Card 7 */}
        <div className="product-card group">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-container mb-4 cursor-pointer">
            <img
              className="product-image w-full h-full object-cover transition-transform duration-700 ease-out"
              alt="A wide, shallow ceramic platter with a delicate crackle glaze in a soft off-white color."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXn458s8Rl91Z6yYHB2kjlRbJ4OCpSbQlJOBH9G9GEyA1Niv2kCnfMM-w3S_5WXDFd5EYHXCaEFMkSjA5NsoN1dxkiPL8ITWDr--Eb6Iozf43BZT8khJKIrKztqgx2qeb5mY7ZyHWfku13ciiD2Jtl1yKSe9_3zdwCwv-YU55xXytTWjYhB7krMH80F5Zo5H38xg6HxHa1MkGy7vZqKbgsyUuXy0MfLOeWYnwbZr78yIefm7IPdBM"
            />
            <button className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                favorite
              </span>
            </button>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-label-md text-label-md text-on-surface mb-1 uppercase tracking-wider">
                Crackle Platter
              </h3>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Hand-etched Detailing
              </p>
            </div>
            <span className="font-label-md text-label-md text-primary">
              $110.00
            </span>
          </div>
        </div>
      </section>

      {/* Newsletter / Editorial Break */}
      <section className="mt-stack-lg bg-surface-container-low rounded-3xl p-margin-mobile md:p-margin-desktop overflow-hidden relative reveal-on-scroll">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
              Join our kiln club.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-md">
              Get early access to limited edition drops, studio updates, and 10%
              off your first handcrafted piece.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-4 max-w-lg"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="flex-1 bg-white border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline/50"
                placeholder="Email address"
                type="email"
              />
              <button
                className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded-xl hover:opacity-90 transition-opacity active:scale-[0.98]"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="hidden md:flex justify-end">
            <div className="w-64 h-64 rounded-full border-2 border-primary/10 flex items-center justify-center relative animate-pulse">
              <span className="material-symbols-outlined text-primary/20 text-8xl">
                local_fire_department
              </span>
              <div className="absolute inset-0 border border-primary/5 rounded-full scale-150"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
