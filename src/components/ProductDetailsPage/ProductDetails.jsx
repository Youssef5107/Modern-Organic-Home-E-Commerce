export default function ProductDetails() {
  return (
    <div className="bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed min-h-[max(884px,100dvh)]">
      <div className="grainy-overlay"></div>

      {/* TopAppBar */}
      <header className="w-full top-0 sticky z-[60] bg-background shadow-sm shadow-primary/5 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16">
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low transition-colors p-2 rounded-full active:scale-95 duration-200">
            menu
          </button>
          <h1 className="font-headline-md text-headline-md-mobile md:text-headline-md tracking-tight text-primary">
            Modern Organic Home
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low transition-colors p-2 rounded-full active:scale-95 duration-200">
            search
          </button>
          <div className="hidden md:flex gap-6 items-center ml-8">
            <a className="font-label-md text-label-md text-primary" href="#">
              Shop
            </a>
            <a
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Artisans
            </a>
            <a
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Sustainability
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-stack-md pb-stack-lg">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-stack-sm text-on-surface-variant font-label-sm text-label-sm">
          <a className="hover:text-primary" href="#">
            Home
          </a>
          <span className="material-symbols-outlined text-[14px]">
            chevron_right
          </span>
          <a className="hover:text-primary" href="#">
            Ceramics
          </a>
          <span className="material-symbols-outlined text-[14px]">
            chevron_right
          </span>
          <span className="text-on-surface">Artisan Vases</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Left: Gallery Bento Section */}
          <section className="md:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2 aspect-[4/5] overflow-hidden rounded-xl group relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="A professional studio photograph of a large, handcrafted terracotta vase..."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7QWNKZnmAnP9QekIYA0PytgsaJ9jdl_W_b3m22W-liZtWG8MlWcXmgtQzuZ299-2GUNFZj5iG8kEPLk3KrOVyXx-v6irhpbhk_bGhhSqA-64bFGz46JYMnvVKNxAv3_SK4a8-SrJ8_279rS7w93bHlWvqBxAPtIs5hUJ5erZ6Qb18-_YyCb4qKNK3MOdlUhnPFlWxcP7nPQH0KlO7KwxN3w9KQ3YQQ7awfDnQNp8ipbf29p7i29c"
                />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>

              <div className="aspect-square overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover"
                  alt="Close-up macro shot of the texture on a handcrafted ceramic vase..."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlllr9VonDI1vMsD1OjgORe8SdrdMVPe4pY_qvF9AP7AxnBll_8_siDlDv61Ono-Hk1CI1l3MHcs7qYX7k9OejySRdEaK4iIPwAeFDdOvmXaGWWj5pw4l-tilutNi-XHFKOzPvv_bZ1f1QdBr0VimVW5hrbczV1x01UDh-WR8ERzzZwQaSMznXG7bch3OGwyrx_BKg9pNmpUohxfKm9nQjMk1KkgeS7WWzUWC0vG1yWJuM1WeX5C0"
                />
              </div>

              <div className="aspect-square overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover"
                  alt="A lifestyle shot of a handcrafted ceramic vase holding a few dried eucalyptus branches..."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQx5M0Av7BknY2cEduUpg0K_-k7zY4XKBdb1ZtvVT1bTjQRxT8nDTWDcn80KlYm4zm9sRnm0Qh9dHIs3PZNlsuBwmPamU2tETR8MtD3EL4ZhFMUTRpBH8z13D816Eip4VcoCvinyo5M4il9kCn-shlrU5TmjSJT4_GuuypQLECNfzMp-y1BU2plCvAcuSv7xjxu3wDtCys_jt20aa3jP5ZnU6o9zEOK3qP5Puwt0eE0Jhv4XJfF18"
                />
              </div>
            </div>
          </section>

          {/* Right: Product Details */}
          <section className="md:col-span-5 flex flex-col pt-4">
            <div className="sticky top-24 space-y-stack-sm">
              <div>
                <span className="font-label-md text-label-md text-secondary tracking-widest uppercase mb-2 block">
                  The Earth Collection
                </span>
                <h2 className="font-headline-xl text-headline-xl text-on-surface leading-tight">
                  Handcrafted Ceramic Vase
                </h2>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex text-tertiary">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    star
                  </span>
                </div>
                <span className="font-body-md text-body-md text-on-surface-variant">
                  (48 Reviews)
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-headline-md text-headline-md text-primary">
                  $185.00
                </span>
                <span className="font-label-md text-label-md text-on-surface-variant/60 line-through">
                  $210.00
                </span>
              </div>

              <div className="flex items-center gap-2 text-secondary font-label-md text-label-md">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                In Stock: Ships in 2-3 Business Days
              </div>

              <div className="space-y-4 pt-4">
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Meticulously shaped by hand using traditional wheel-throwing
                  techniques, each piece in the Earth Collection is a unique
                  celebration of organic form. This vase features a signature
                  "Sand &amp; Soil" glaze that mimics the variegated textures of
                  natural minerals.
                </p>
                <div className="space-y-3">
                  <h4 class="font-label-md text-label-md text-on-surface">
                    Details &amp; Materials
                  </h4>
                  <ul className="font-body-md text-body-md text-on-surface-variant space-y-2 list-none p-0">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>{" "}
                      100% Stoneware Clay
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>{" "}
                      Matte reactive glaze
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>{" "}
                      Water-tight and weighted base
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>{" "}
                      Approx. 10" H x 6" W
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-stack-md space-y-4">
                <div className="flex gap-4">
                  <div className="flex items-center bg-surface-container border border-outline-variant rounded-lg px-4">
                    <button className="p-2 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[18px]">
                        remove
                      </span>
                    </button>
                    <span className="px-4 font-label-md text-label-md">1</span>
                    <button className="p-2 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[18px]">
                        add
                      </span>
                    </button>
                  </div>
                  <button className="flex-1 bg-primary text-on-primary font-label-md text-label-md py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all active:scale-95 active:shadow-sm">
                    Add to Cart
                  </button>
                </div>
                <button className="w-full border border-secondary text-secondary font-label-md text-label-md py-4 rounded-xl hover:bg-secondary/5 transition-colors">
                  Save to Wishlist
                </button>
              </div>

              <div className="pt-8 border-t border-outline-variant flex justify-between text-on-surface-variant font-label-sm text-label-sm">
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined">eco</span>
                  Sustainable
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined">
                    local_shipping
                  </span>
                  Free Shipping
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined">history</span>
                  30 Day Return
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Editorial Lookbook Section */}
        <section className="mt-stack-lg bg-surface-container-low rounded-2xl overflow-hidden relative group">
          <div
            className="w-full h-80 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBp3G6e56leuH-2fzpYXw6B1DO9vf5S00L9nSop_Vn57ouIz05P9jp9TBSlAgCkxCpYi8s9iXGbEbqSDwisv678tvjB6jLauHlceBPsrBy2xwSOcpp-BkVQUOUdwRUnDyqXRaDKklrkvN1u5MWTPZe4y0b_Flh9HNSkfX45RnsujpClN5zBa693EnT1Sq8pIR4pAFT5hZga1L65WkVltpl4q5i68ZGzjPm6TlUhAVQfTYiUMuelLBI')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-white max-w-lg">
            <h3 className="font-headline-lg text-headline-lg mb-2">
              The Soul of the Maker
            </h3>
            <p className="font-body-md text-body-md opacity-90">
              Every curve and mark is a testament to the artisan's journey.
              Discover the story behind our latest collection.
            </p>
            <button className="mt-4 font-label-md text-label-md border-b-2 border-white pb-1 hover:opacity-100 opacity-80 transition-opacity">
              Read Artisans Story
            </button>
          </div>
        </section>

        {/* You Might Also Like */}
        <section className="mt-stack-lg">
          <h3 className="font-headline-md text-headline-md mb-stack-sm">
            You might also like
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {/* Related Product 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative shadow-sm transition-all group-hover:shadow-xl group-hover:shadow-primary/10">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjS3QuW9kKi1J6bLX7VymWB4ngKsR9-DJy-ZZQ05Dw9h7aDrOSY15XsmzeMZ1MaRVWVfsOdA72Jp510RVcFM1RfQm7UinzlOqw-e2vB5LFeO8Fswvmdu-zaNjPLliE4QriAxWy5w5ZvG7nD6gHNMEgQhO2e5cB8unfcgT9hzu3PoC8t7k-XjFPKMIV48yWzEC-F815uxZXBGGJjGHWG68CIOEd8p4IeRPNsnj7Rg_kkm18s4r50uE"
                  alt="Stone Creek Bowl"
                />
                <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <span className="material-symbols-outlined text-[20px]">
                    favorite
                  </span>
                </button>
              </div>
              <p className="font-label-md text-label-md text-on-surface mb-1">
                Stone Creek Bowl
              </p>
              <p className="font-label-sm text-label-sm text-primary">$65.00</p>
            </div>
            {/* Related Product 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative shadow-sm transition-all group-hover:shadow-xl group-hover:shadow-primary/10">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBknZCPlQVVITTVHmkiJ6UHhYKCfXtxNxGtcFm1PmwLRo_A4z0qSXRM6uwGgQlyKVXiy9uYJNOn6S6my-vDEtF5X4xFyXmD0md7dln1Htn7o3glustsBSxAvvea9j1kRkn6CP8QpAndXSpKgya7eRzTyL9ceeVpXdjPdR0IEcwnMyU61Y0UM-EQJQK01-1WRnX4Ls0Ilq_WVVT5nwcxWW28Z0MVkix3JW_KC47IVTTqrGeNbMKpHMU"
                  alt="Bud Vase Trio"
                />
                <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <span className="material-symbols-outlined text-[20px]">
                    favorite
                  </span>
                </button>
              </div>
              <p className="font-label-md text-label-md text-on-surface mb-1">
                Bud Vase Trio
              </p>
              <p className="font-label-sm text-label-sm text-primary">$89.00</p>
            </div>
            {/* Related Product 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative shadow-sm transition-all group-hover:shadow-xl group-hover:shadow-primary/10">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD6wcK05WewzFWzk4e5FdRMhxFq8oXMNE_4xCevCyo4l9AJt9Hy_Bi6x_tanlXqIvlsnMRy9iUz70GjbnSmNfhyKSlq-8Hk8nN4g88FNpBMWAHIoWP7LLn3t3UEUYD9wQkI43nqLlAfrRGM3M0IWNOHt91wLI1l1dlon6QPkZIzG7ojNpFpqGm7DqtDmoTLKnov0CSfY9Hr6Mw9LaMjD6O03mEXucPrAxAQflpnNTANXfSwI5U0o0"
                  alt="Porcelain Pitcher"
                />
                <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <span className="material-symbols-outlined text-[20px]">
                    favorite
                  </span>
                </button>
              </div>
              <p className="font-label-md text-label-md text-on-surface mb-1">
                Porcelain Pitcher
              </p>
              <p className="font-label-sm text-label-sm text-primary">
                $120.00
              </p>
            </div>
            {/* Related Product 4 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative shadow-sm transition-all group-hover:shadow-xl group-hover:shadow-primary/10">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpBRk03uZhRkAVtBv4ICc4GOsyqpsylAtsQ3u87iQ7VT1AUyblogtCbjonwX_5rCDUeUFJhEq3dI2c3dBmCPnwaH365VwoaVcgYahb-zZLBLyyRW7mSoglQ293f02NAcGs4jUu3byfGaDVRNawELuaFFeIt8hFMfSCBEA-9hRBLn9CxUGzkLwwPM7IlVvMM5qRRAcBDsyzbJN5i56sg9q33cGgs-Cik6RpfE6KJ-wztIKcqOgBnYY"
                  alt="Nightfall Platter"
                />
                <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <span className="material-symbols-outlined text-[20px]">
                    favorite
                  </span>
                </button>
              </div>
              <p className="font-label-md text-label-md text-on-surface mb-1">
                Nightfall Platter
              </p>
              <p className="font-label-sm text-label-sm text-primary">
                $145.00
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-high py-stack-lg border-t border-outline-variant px-margin-mobile md:px-margin-desktop mb-24">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">
              Modern Organic Home
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Curating the finest handcrafted home goods for those who
              appreciate the beauty of natural materials and artisanal
              craftsmanship.
            </p>
          </div>
          <div>
            <h4 className="font-label-md text-label-md text-on-surface mb-4">
              Explore
            </h4>
            <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Our Story
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Artisans
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Journal
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-md text-label-md text-on-surface mb-4">
              Support
            </h4>
            <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Shipping
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Returns
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* BottomNavBar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pt-2 pb-6 bg-surface dark:bg-surface-container-low shadow-[0_-4px_20px_rgba(111,52,41,0.08)] rounded-t-xl">
        <div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant px-5 py-1 hover:text-primary transition-all active:scale-90 duration-200">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-sm text-label-sm mt-1">Home</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-secondary-container dark:bg-on-secondary-fixed-variant text-on-secondary-container dark:text-secondary-fixed rounded-full px-5 py-1 hover:text-primary transition-all active:scale-90 duration-200">
          <span className="material-symbols-outlined">storefront</span>
          <span className="font-label-sm text-label-sm mt-1">Shop</span>
        </div>
        <div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant px-5 py-1 hover:text-primary transition-all active:scale-90 duration-200">
          <span className="material-symbols-outlined">shopping_bag</span>
          <span className="font-label-sm text-label-sm mt-1">Cart</span>
        </div>
        <div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant px-5 py-1 hover:text-primary transition-all active:scale-90 duration-200">
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-sm text-label-sm mt-1">Profile</span>
        </div>
      </nav>
    </div>
  );
}
