import { useDispatch, useSelector } from "react-redux";
import {
  toggleFavorite,
  toggleAddedProducts,
} from "../../features/togglreFavorites/toggleProductsInfoSlice";
import data from "../../data/products.json";

const livingRoomProducts = data.collections.find(
  (collection) => collection.id === "living-room",
);

export default function LivingRoomCollection() {
  const dispatch = useDispatch();
  const favoriteIds = useSelector((state) => state.ProductsInfo.favoriteIds);
  const addedIds = useSelector((state) => state.ProductsInfo.addedIds);

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
        {livingRoomProducts.products.map((product) => {
          const isFavorited = favoriteIds.includes(product.id);
          const isAdded = addedIds.includes(product.id);
          console.log(isFavorited);
          return (
            <div
              key={product.id}
              className="group flex flex-col cursor-pointer"
            >
              <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-xl bg-surface-container">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="A premium solid walnut coffee table with a smooth, hand-finished matte texture, positioned in a bright, minimalist living room with floor-to-ceiling windows. The lighting is warm and natural, casting soft, diffused shadows. The aesthetic is modern organic with a palette of deep wood tones and creamy neutrals."
                  src={product.image_url}
                />
                <button
                  className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity card-favorite-btn ${isFavorited ? "card-favorite-btn-active" : ""}`}
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
                      ? "bg-primary text-on-primary scale-103 shadow-[0_12px_24px_rgba(111,52,41,0.22)] opacity-100"
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
              <div className="flex flex-col gap-1">
                <h3 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {product.series}
                </p>
                <p className="font-label-md text-label-md text-primary mt-1">
                  {data.currency}
                  {product.price}
                </p>
              </div>
            </div>
          );
        })}
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
