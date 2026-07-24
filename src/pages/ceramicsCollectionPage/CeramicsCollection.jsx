import data from "../../data/products.json";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleFavorite,
  toggleAddedProducts,
  viewCardDetails,
} from "../../features/togglreFavorites/toggleProductsInfoSlice";

const ceramicsProducts = data.collections.find(
  (collection) => collection.id === "ceramics",
);

export default function CeramicsCollection() {
  const dispatch = useDispatch();
  const favoriteIds = useSelector((state) => state.ProductsInfo.favoriteIds);
  const addedIds = useSelector((state) => state.ProductsInfo.addedIds);

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
            aria-label="A macro shot of a master potter's hands shaping a wet clay vase on a wooden spinning wheel."
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
              alt="Handcrafted ceramic vases"
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

        {/* Dynamic Product Mapping */}
        {ceramicsProducts?.products.map((product) => {
          const isFavorited = favoriteIds.includes(product.id);
          const isAdded = addedIds.includes(product.id);

          return (
            <div key={product.id} className="product-card group">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-container mb-4 cursor-pointer">
                <Link
                  to={`/shop/dining-rooms/card-details-view#${product.name}`}
                  className="product-card group"
                  onClick={() => {
                    dispatch(viewCardDetails(product.id));
                    window.scrollTo({ top: 0, behavior: "auto" });
                  }}
                >
                  <img
                    className="product-image w-full h-full object-cover transition-transform duration-700 ease-out"
                    alt={product.name}
                    src={product.image_url}
                  />
                </Link>

                {/* Favorite Button */}
                <button
                  className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-primary transition-all card-favorite-btn ${
                    isFavorited
                      ? "opacity-100 card-favorite-btn-active bg-primary text-white"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(toggleFavorite(product.id));
                  }}
                >
                  <span className="material-symbols-outlined">favorite</span>
                </button>
                <button
                  className={`absolute bottom-4 right-4 p-2 rounded-full shadow-lg transition-all flex items-center justify-center ${
                    isAdded
                      ? "bg-primary text-on-primary shadow-[0_12px_24px_rgba(111,52,41,0.22)] opacity-100"
                      : "bg-surface/80 text-primary opacity-0 group-hover:opacity-100 hover:scale-105"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(toggleAddedProducts(product.id));
                  }}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    add_shopping_cart
                  </span>
                </button>

                {product.is_new_arrival ? (
                  <div className="absolute bottom-4 left-4 bg-primary text-on-primary font-label-sm text-label-sm px-3 py-1 rounded-full">
                    New Arrival
                  </div>
                ) : null}
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-label-md text-label-md text-on-surface mb-1 uppercase tracking-wider">
                    {product.name}
                  </h3>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    {product.series}
                  </p>
                </div>
                <span className="font-label-md text-label-md text-primary">
                  {data.currency}
                  {product.price}
                </span>
              </div>
            </div>
          );
        })}
      </section>

      {/* Newsletter Section */}
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
