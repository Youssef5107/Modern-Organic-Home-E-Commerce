import data from "../../../data/products.json";
import { Link } from "react-router-dom";
import {
  toggleFavorite,
  toggleAddedProducts,
  viewCardDetails,
} from "../../../features/togglreFavorites/toggleProductsInfoSlice";
import { useDispatch, useSelector } from "react-redux";

const newArrivals = data.collections
  .flatMap((collection) => collection.products || [])
  .filter((product) => product.is_new_arrival)
  .slice(0, 3);

export default function NewArrivalsSection() {
  const dispatch = useDispatch();
  const favoriteIds = useSelector((state) => state.ProductsInfo.favoriteIds);
  const addedIds = useSelector((state) => state.ProductsInfo.addedIds);
  return (
    <>
      <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-stack-md">
        New Arrivals
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
        {/* Product Card 1 */}
        {newArrivals.map((product) => {
          const isFavorited = favoriteIds.includes(product.id);
          const isAdded = addedIds.includes(product.id);
          return (
            <div className="group flex flex-col">
              <div className="relative aspect-square bg-surface-container rounded-xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                <Link
                  to={`/home/card-details-view#${product.name}`}
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
                  <span className="material-symbols-outlined text-[18px]">
                    favorite
                  </span>
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
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="font-label-md text-label-md text-on-background group-hover:text-primary transition-colors">
                    {product.name}
                  </h5>
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
      </div>
    </>
  );
}
