import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../features/togglreFavorites/toggleProductsInfoSlice";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import data from "../../data/products.json";

export default function SavedItems() {
  const muiIconStyle = { color: "inherit", fontSize: "24px" };
  const dispatch = useDispatch();
  const favoriteIds = useSelector((state) => state.ProductsInfo.favoriteIds);

  const allProducts = data.collections.flatMap(
    (collection) => collection.products,
  );

  const savedProducts = allProducts.filter((product) =>
    favoriteIds.includes(product.id),
  );

  return (
    <div className="min-h-screen flex flex-col font-body-md text-body-md bg-surface-bright text-on-surface antialiased">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface-bright dark:bg-surface-dim shadow-sm shadow-primary/5 px-margin-mobile md:px-margin-desktop py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link
            to={"/profile"}
            className="text-primary dark:text-primary-fixed-dim hover:text-primary transition-colors active:scale-95 duration-200"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed-dim">
            Saved Items
          </h1>
        </div>
        <div className="flex items-center gap-2 text-primary">
          <Link
            to={"/cart"}
            className="hidden md:flex hover:bg-surface-container-low transition-colors p-2 rounded-full active:scale-95 duration-200 items-center justify-center"
          >
            <ShoppingBagIcon style={muiIconStyle} />
          </Link>
        </div>
      </header>

      <main className="flex-grow pt-24 pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="mb-stack-md flex items-end justify-between">
          <div>
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">
              Curated Favorites
            </p>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              Your Sanctuary
            </h2>
          </div>

          <p className="font-label-md text-label-md text-on-surface-variant hidden md:block">
            {savedProducts.length}{" "}
            {savedProducts.length === 1 ? "Item Saved" : "Items Saved"}
          </p>
        </div>

        {savedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {savedProducts.map((product) => {
              const isFavorited = favoriteIds.includes(product.id);

              return (
                <div
                  key={product.id}
                  className="group flex flex-col animate-in fade-in duration-700"
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-surface-container-low product-card-shadow transition-all duration-300">
                    <img
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={product.image_url}
                    />
                    <button
                      className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity card-favorite-btn ${isFavorited ? "card-favorite-btn-active" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(toggleFavorite(product.id));
                      }}
                    >
                      <span className="material-symbols-outlined filled-icon">
                        favorite
                      </span>
                    </button>
                  </div>

                  <div className="mt-4 flex justify-between items-start">
                    <div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                        {product.series}
                      </p>
                      <h3 className="font-headline-md text-headline-md text-on-surface leading-tight">
                        {product.name}
                      </h3>
                      <p className="font-label-md text-label-md text-primary mt-1">
                        {data.currency}
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-stack-lg max-w-md mx-auto">
            <span className="material-symbols-outlined text-outline-variant text-6xl mb-6">
              spa
            </span>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Your sanctuary of favorites is empty. Explore our collections to
              find pieces that speak to you.
            </p>
            <Link
              to={"/shop"}
              className="mt-8 px-8 py-3 bg-primary text-on-primary rounded-xl font-label-md text-label-md transition-all active:scale-95"
            >
              Start Exploring
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
