import data from "../../data/products.json";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleFavorite,
  toggleAddedProducts,
  viewCardDetails,
} from "../../features/togglreFavorites/toggleProductsInfoSlice";

const bedroomProducts = data.collections.find(
  (collection) => collection.id === "bedroom",
);

export default function BedroomCollection() {
  const dispatch = useDispatch();
  const favoriteIds = useSelector((state) => state.ProductsInfo.favoriteIds);
  const addedIds = useSelector((state) => state.ProductsInfo.addedIds);

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-md animate-page-enter">
      {/* Filter & Sort Bar */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-4 mb-stack-md reveal-on-scroll">
        <div className="flex flex-wrap gap-2 items-center">
          <button className="px-4 py-2 rounded-xl bg-secondary-container/30 text-primary border border-primary/10 font-label-md text-label-md flex items-center gap-2 hover:bg-secondary-container/50 transition-all">
            <span className="material-symbols-outlined text-[18px]">tune</span>
            Filters
          </button>
          <div className="h-6 w-[1px] bg-outline-variant/30 mx-2 hidden md:block"></div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            <span className="px-4 py-2 rounded-xl bg-surface-container text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap cursor-pointer hover:bg-surface-variant transition-colors">
              Linen
            </span>
            <span className="px-4 py-2 rounded-xl bg-surface-container text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap cursor-pointer hover:bg-surface-variant transition-colors">
              Quilts
            </span>
            <span className="px-4 py-2 rounded-xl bg-surface-container text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap cursor-pointer hover:bg-surface-variant transition-colors">
              Lighting
            </span>
          </div>
        </div>
        <div className="w-full md:w-auto flex justify-between items-center gap-4">
          <p className="font-label-sm text-label-sm text-outline">
            12 Products
          </p>
          <button className="px-4 py-2 rounded-xl text-on-surface-variant font-label-md text-label-md flex items-center gap-2 hover:opacity-80 transition-opacity">
            Sort: Featured
            <span className="material-symbols-outlined text-[18px]">
              expand_more
            </span>
          </button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter reveal-on-scroll">
        {bedroomProducts?.products.map((product) => {
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

      {/* Editorial Lookbook Section */}
      <section className="mt-stack-lg mb-stack-lg reveal-on-scroll">
        <div className="relative h-[500px] rounded-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
          <img
            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
            alt="A large-scale, editorial lifestyle photograph of a complete, beautifully styled modern organic bedroom."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcToPyMYHHigJ_KvFmAszqUEsxfGief7fZ6Rdmnu_od0tNqaiyECLym7NeA_r_4CbbBML3caJlTFFURBK7gYGBlRcwMlD5UZAgRWsz58fBRqBT1NUF2Fp8a3mit2gxOFfzU6eKuCZT71QFrMYkXZqHTEwTO8SLiO_bUZzVfeoxrdgL6qtfUtAK9ed6xy_K3s_mdBK33BAysC124oAMT3sb2VtBzYvLr9Hv8DWa37Mx6C5KVrp5FWM"
          />
          <div className="absolute bottom-10 left-10 z-20 max-w-md">
            <h2 className="font-headline-xl text-headline-xl text-white mb-4">
              The Restorative Retreat
            </h2>
            <p className="font-body-lg text-body-lg text-white/90 mb-6">
              Discover the art of slow mornings with our curated bedroom
              essentials, designed for comfort and crafted with integrity.
            </p>
            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-primary-container transition-colors active:scale-95">
              Shop The Look
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
