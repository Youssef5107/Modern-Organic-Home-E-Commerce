import { useState } from "react";

const PRODUCTS = [
  {
    id: 1,
    title: "Hand-Thrown Ceramic Vase",
    variant: "Natural Sandstone",
    price: 124.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnuE6voQtJr5Ehcz_o5D_qCe78SYpL9cRMcT_mNgFHpiq0Ow8rsULWIKF4dBRSGQEZXPw7Li8JlUIrf0SablMizrhea35BWkkIzVsvGWlYlEQ16qW1mQJRePpFnb2qhp98jgCp0LWB7X5_AZ1EEPQEWSL-EGqsRN5LW2xUWMCEBGKXxJUL5Jtzcxm8MDvsZ94zvr1OilfGuXGsJMH9_j20rNoa3Sq7lPWBlWoE7d2W-Wyt43ms1cw",
    alt: "A close-up of a handmade organic ceramic vase with a matte beige texture, placed on a light oak wooden table.",
    tag: "New",
  },
  {
    id: 2,
    title: "Washed Linen Pillow Cover",
    variant: "Sage & Moss",
    price: 68.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIIikvj9vF7GUtr7dyIAbZXAHhwfKSjfJXpin1fTM1t2vVzm6Td3SmfidpHG1EDJ6tJBc_Q1O62kSYMuVXGpTWC42vOMOYyivNZt7RHR5hoJHsGE6rMYtHJO3uVOFxDUl5tLKdGxkowlOBiMZ-xqL_Z1VTlZMk14kl-HEhO8fxm1noxNm9VP4zj1mDhCYXRUviJOoLEn8jg-M_e6DMXCWdIb9CC2jHWUL8WiqsgwsoVt9AeqSCdWw",
    alt: "A pair of high-quality linen pillows in muted olive and sage green colors, artfully arranged on a cream-colored soft fabric sofa.",
  },
  {
    id: 3,
    title: "Solid Walnut Coffee Table",
    variant: "Walnut",
    price: 850.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqXouJRz_nlvAEU7y36j8Poc04lFF7p8W4X2cjWSGWvKZY3o-ThXEl8fxJUCmbhRV_vC0oj647mfU1xz14mTgROfITcMVhSYz0Bk1MUesVAmMbvodqDBPIuCjI-d5r_pR0l2f0BSBzidr7lpTQHFDZXyP_p7FkZ-SurEtmaBUVbBmMWudp8rILldliDTkIqf3b4pL-rxdQgsu0CZrIV4YEGHwTdU749hdFra5rN3BhCgJdrzcVk8w",
    alt: "A minimalist low-profile coffee table made of solid walnut with rounded edges, standing on a light-colored textured wool rug.",
  },
  {
    id: 4,
    title: "Textured Wool Throw",
    variant: "Oatmeal",
    price: 110.0,
    originalPrice: 145.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyZkg5QnAtY4r11pWsbTqClwNcDHsM8tlIyJisuWew3Jz3uF67Vx-ZSmJm_tCTrfvIFbs4pxvxKBiAS2rpok873PsNRaPwSv4r0rNQLzevHKtleqE8dD-ZQy9xa61-Vhu-2ChhEg5JMOQLyemu_oz9WU-XG3KiL1W8QAls6tPvFcJ0CtEJF6PZu8tLn6piRVBPINU7bX6Kv6aCcy7iQhhpujF0n-MCZDzU8ShSbxtGRWcfXGu47IU",
    alt: "A textured woven wool throw blanket in a light oatmeal color, draped elegantly over the arm of a modern wooden chair.",
    tag: "Sale",
  },
  {
    id: 5,
    title: "Pleated Sculptural Lamp",
    variant: "Terracotta",
    price: 195.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVmRvzgaO6QSQE0oJOnrBbk-68TdPrSaoK-zEuNlURhtpTCAHOz-jLjE_JfQ_2AG-4mSSyGLtwAIktg3zc8w0-vU6g5yTxo_uq2HtONiUOlLuJtHrkUi1hxfyxKCloSvQ4WYcRURPCYF4kdSKTsrXsmn-4xX0qKWCiAyphHM6RxTBxoSnC7dJDofOVbAqVsYIyjP8az5K8ayp1YuwEx3xLcO032UJjVtVT6CPgGLEn-AASWBP0ibw",
    alt: "A sleek minimalist sculptural lamp with a terracotta base and a soft white pleated fabric shade.",
  },
  {
    id: 6,
    title: "Stone Incense Burner",
    variant: "Basalt",
    price: 42.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdq59L51OSZ8rpErPoGBeV5U8SXY_WEdG9FgBijaSCOl2PIgmaQmSvWCo2-5QCk4o02HKH4bhOwNB5J-ouhl-5qiyE_5wZpDmw3AGdYIRE0rPNKcirwnKcXGASustE-gexnE751t-CttnXcIVt5fRMVoLZkhdRPBYrq3RD74zFAx6JP9B35JC5YOK_6TJzYj4zWHN45wT4Bkdt_YABznk3LddKShog6yjehwsM4-nHKKO622ZZdkw",
    alt: "An artisanal incense burner made from dark basalt stone, with a thin wisp of smoke curling upwards.",
  },
];

export default function LivingRoomProducts() {
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (e, productId) => {
    e.stopPropagation();

    // Set item as "added"
    setAddedItems((prev) => ({ ...prev, [productId]: true }));

    // Reset back to "add" after 1.5 seconds (mirrors original micro-interaction)
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [productId]: false }));
    }, 1500);
  };

  return (
    <div className="font-body-md text-[#1b1c19] selection:bg-[#ffdad3] selection:text-[#390b04] bg-[#fbf9f4] min-h-screen">
      {/* TopAppBar */}
      <header className="w-full top-0 sticky z-50 bg-[#fbf9f4] shadow-sm shadow-[#6f3429]/5 flex justify-between items-center px-5 md:px-16 h-16">
        <div className="flex items-center gap-4">
          <button className="text-[#6f3429] hover:bg-[#f5f3ee] transition-colors p-2 rounded-full active:scale-95 duration-200">
            <span className="material-symbols-outlined block">menu</span>
          </button>
          <h1 className="text-2xl md:text-2xl tracking-tight text-[#6f3429] font-serif">
            Modern Organic Home
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-[#6f3429] hover:bg-[#f5f3ee] transition-colors p-2 rounded-full active:scale-95 duration-200">
            <span className="material-symbols-outlined block">search</span>
          </button>
          <div className="hidden md:flex gap-6 items-center ml-8">
            <a className="font-semibold text-sm text-[#6f3429]" href="#">
              Living Room
            </a>
            <a
              className="font-semibold text-sm text-[#534340] hover:text-[#6f3429] transition-colors"
              href="#"
            >
              Kitchen
            </a>
            <a
              className="font-semibold text-sm text-[#534340] hover:text-[#6f3429] transition-colors"
              href="#"
            >
              Bedroom
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1280px] mx-auto px-5 md:px-16 pb-32 pt-8">
        {/* Category Header */}
        <section className="mb-16">
          <nav className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium text-[#534340]">
              Collections
            </span>
            <span className="material-symbols-outlined text-[14px] text-[#86736f]">
              chevron_right
            </span>
            <span className="text-xs font-medium text-[#6f3429]">
              Living Room
            </span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl mb-4 text-[#1b1c19] font-serif">
                Living Room
              </h2>
              <p className="text-lg text-[#534340]">
                Curated essentials for a serene dwelling. Discover tactile
                textures, warm woods, and artisanal ceramics designed to ground
                your daily rituals.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-6 md:mt-0">
              <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#f0eee9] border border-[#d8c2bd] hover:bg-[#eae8e3] transition-colors">
                <span className="material-symbols-outlined text-[#534340]">
                  tune
                </span>
                <span className="font-semibold text-sm text-[#1b1c19]">
                  Filter
                </span>
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#f0eee9] border border-[#d8c2bd] hover:bg-[#eae8e3] transition-colors">
                <span className="material-symbols-outlined text-[#534340]">
                  swap_vert
                </span>
                <span className="font-semibold text-sm text-[#1b1c19]">
                  Sort
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-16">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative mb-4 rounded-xl overflow-hidden aspect-[4/5] bg-[#f5f3ee] transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(111,52,41,0.08)]">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 shadow-[inset_0_0_0_0.5px_rgba(134,115,111,0.2)]"
                  src={product.img}
                  alt={product.alt}
                />

                {/* Dynamic Cart Button */}
                <button
                  onClick={(e) => handleAddToCart(e, product.id)}
                  className={`absolute bottom-4 right-4 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform translate-y-12 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 active:scale-90 ${
                    addedItems[product.id] ? "bg-[#444937]" : "bg-[#6f3429]"
                  }`}
                >
                  <span className="material-symbols-outlined">
                    {addedItems[product.id] ? "check" : "add"}
                  </span>
                </button>

                {/* Conditional Badges */}
                {product.tag && (
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        product.tag === "New"
                          ? "bg-white/90 text-[#6f3429] backdrop-blur-sm"
                          : "bg-[#6f3429] text-white"
                      }`}
                    >
                      {product.tag}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="font-semibold text-sm text-[#1b1c19] mb-1">
                {product.title}
              </h3>
              <p className="text-xs text-[#534340] mb-2">{product.variant}</p>
              <div className="flex gap-2">
                <p className="font-semibold text-sm text-[#6f3429]">
                  ${product.price.toFixed(2)}
                </p>
                {product.originalPrice && (
                  <p className="font-semibold text-sm text-[#534340] line-through">
                    ${product.originalPrice.toFixed(2)}
                  </p>
                )}
              </div>
            </div>
          ))}

          {/* Editorial Lookbook Card */}
          <div className="col-span-2 relative group rounded-xl overflow-hidden aspect-video md:aspect-auto md:h-full bg-[#7c552c]">
            <img
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0z5ckXICqGQuNdLtWT2dpOEmUp-3GqudVsfGDW-hDaMC3UDgcNeCugbsrkHHOJlK_DbDC3rHBhgvFuOGABPpifcn2n3035bMtMIJ348ulYyPuHTPQZtEeOGrAzoc7EaePfzLShNc_JIfQk6ORH5cD-gxpmfMtdFA-jn95cW8p3P4dwSzUNu2PVat_0MVZDzWTuLJrWgfm2f2FUJguX6DXGSrkCA8WN_ckmOWmzRIBngFRl7fz5Zk"
              alt="An editorial lookbook image of a bright, sun-lit living room emphasizing warm organic aesthetics."
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl md:text-3xl text-white mb-2 font-serif">
                The Art of Slow Living
              </h3>
              <p className="text-sm text-white/90 mb-6 max-w-md">
                Explore our guide on creating a home that breathes, using
                natural materials and intentional design.
              </p>
              <button className="font-semibold text-sm text-white border-b-2 border-white/50 hover:border-white transition-colors pb-1">
                Read the Journal
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-16 p-10 md:p-20 rounded-[2rem] bg-[#e0e5cc]/30 relative overflow-hidden text-center">
          <div className="relative z-10 max-w-lg mx-auto">
            <h3 className="text-2xl text-[#626753] font-serif mb-4">
              Join Our Journey
            </h3>
            <p className="text-sm text-[#626753]/80 mb-8">
              Sign up for our newsletter and receive 10% off your first order,
              plus early access to new collections and artisanal stories.
            </p>
            <form
              className="flex flex-col md:flex-row gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="flex-1 px-6 py-3 rounded-full bg-white/50 border-none focus:ring-2 focus:ring-[#6f3429] text-sm text-[#1b1c19] placeholder-[#534340]/60 outline-none"
                placeholder="Your email address"
                type="email"
              />
              <button className="bg-[#6f3429] text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-[#8c4b3e] transition-colors active:scale-95 duration-200">
                Subscribe
              </button>
            </form>
          </div>
          {/* Decorative blur elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#6f3429]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#613e17]/5 rounded-full blur-3xl"></div>
        </section>
      </main>

      {/* Mobile BottomNavBar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pt-2 pb-6 bg-[#fbf9f4] shadow-[0_-4px_20px_rgba(111,52,41,0.08)] rounded-t-xl">
        <a
          className="flex flex-col items-center justify-center text-[#534340] px-5 py-1 hover:text-[#6f3429] transition-all active:scale-90 duration-200"
          href="#"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="text-xs">Home</span>
        </a>
        <a
          className="flex flex-col items-center justify-center bg-[#e0e5cc] text-[#626753] rounded-full px-5 py-1 active:scale-90 duration-200"
          href="#"
        >
          <span className="material-symbols-outlined">storefront</span>
          <span className="text-xs">Shop</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-[#534340] px-5 py-1 hover:text-[#6f3429] transition-all active:scale-90 duration-200"
          href="#"
        >
          <span className="material-symbols-outlined">shopping_bag</span>
          <span className="text-xs">Cart</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-[#534340] px-5 py-1 hover:text-[#6f3429] transition-all active:scale-90 duration-200"
          href="#"
        >
          <span className="material-symbols-outlined">person</span>
          <span className="text-xs">Profile</span>
        </a>
      </nav>
    </div>
  );
}
