import data from "../../data/products.json";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../features/togglreFavorites/togglreFavoritesSlice";

const diningRoomProducts = data.collections.find(
  (collection) => collection.id === "dining",
);

export default function DiningCollection() {
  const dispatch = useDispatch();
  const favoriteIds = useSelector((state) => state.ProductsInfo.favoriteIds);
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

        {diningRoomProducts?.products.map((product) => {
          const isFavorited = favoriteIds.includes(product.id);

          return (
            <div key={product.id} className="product-card group">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-container mb-4 cursor-pointer">
                <img
                  className="product-image w-full h-full object-cover transition-transform duration-700 ease-out"
                  alt={product.name}
                  src={product.image_url}
                />

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
