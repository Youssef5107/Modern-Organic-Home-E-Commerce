import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleFavorite,
  toggleAddedProducts,
  viewCardDetails,
} from "../../features/toggleProductsInfo/toggleProductsInfoSlice";

export default function Shop() {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  const dispatch = useDispatch();
  const favoriteIds = useSelector((state) => state.ProductsInfo.favoriteIds);
  const addedIds = useSelector((state) => state.ProductsInfo.addedIds);

  useEffect(() => {
    fetch(
      "https://my-e-commerce-website-production.up.railway.app/api/shop/collections",
    )
      .then((res) => res.json())
      .then((data) => {
        setCollections(data?.collections || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch shop collections:", err);
        setLoading(false);
      });
  }, []);

  const ceramicsProducts = collections.find((c) => c.id === "ceramics");
  const livingRoomProducts = collections.find((c) => c.id === "living-room");
  const diningRoomProducts = collections.find((c) => c.id === "dining");
  const bedroomProducts = collections.find((c) => c.id === "bedroom");

  const filterButtons = [
    { id: "all", label: "All" },
    { id: "ceramics", label: "Ceramics" },
    { id: "textiles", label: "Textiles" },
    { id: "furniture", label: "Furniture" },
  ];

  const isSectionVisible = (categoryKey) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "ceramics" && categoryKey === "ceramics") return true;
    if (
      activeFilter === "furniture" &&
      (categoryKey === "living-room" || categoryKey === "dining")
    ) {
      return true;
    }
    if (activeFilter === "textiles" && categoryKey === "bedroom") return true;
    return false;
  };

  if (loading) return null;

  return (
    <>
      {/* Main Content */}
      <div
        key={activeFilter}
        className="max-w-[1280px] mx-auto px-5 md:px-16 pt-8 pb-16 animate-page-enter"
      >
        {/* Filter/Sort Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-stack-lg animate-fade-in">
          <div>
            <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface mb-2">
              Our Curated Shop
            </h2>
            <p className="text-on-surface-variant max-w-lg">
              Functional beauty for the slow living space. Every piece is
              selected for its tactile quality and sustainable origin.
            </p>
          </div>
          <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 [scrollbar-width:thin] [::-webkit-scrollbar]:h-1">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-secondary-container text-on-secondary-container rounded-full font-label-md whitespace-nowrap cursor-default">
              <span className="material-symbols-outlined text-[18px] select-none">
                tune
              </span>
              Filter
            </button>
            <div className="h-6 w-px bg-outline-variant mx-1"></div>

            {filterButtons.map((btn) => {
              const isActive = activeFilter === btn.id;
              return (
                <button
                  key={btn.id}
                  onClick={() => setActiveFilter(btn.id)}
                  className={`px-5 py-2.5 rounded-full font-label-md whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-primary text-on-primary shadow-sm"
                      : "bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant"
                  }`}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 1: Ceramics */}
        {isSectionVisible("ceramics") && ceramicsProducts && (
          <section className="mb-stack-lg reveal-on-scroll">
            <div className="flex items-end justify-between mb-stack-sm">
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
                Ceramics
              </h3>
              <Link
                className="font-label-md text-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
                to={"./ceramics"}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "auto" });
                }}
              >
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {ceramicsProducts.products.slice(0, 3).map((product) => {
                const isFavorited = favoriteIds.includes(product.id);
                const isAdded = addedIds.includes(product.id);
                return (
                  <div
                    key={product.id}
                    className="group relative overflow-hidden bg-white rounded-xl [transition:transform_0.3s,box-shadow_0.3s] hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(111,52,41,0.08)]"
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      <Link
                        to={`/shop/card-details-view#${product.name}`}
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
                    <div className="p-5">
                      <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                        {product.series}
                      </p>
                      <h4 className="font-headline-md text-headline-md text-on-surface mb-1">
                        {product.name}
                      </h4>
                      <p className="text-primary font-semibold">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Section 2: Living Room */}
        {isSectionVisible("living-room") && livingRoomProducts && (
          <section className="mb-stack-lg reveal-on-scroll">
            <div className="flex items-end justify-between mb-stack-sm">
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
                Living Room
              </h3>
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "auto" });
                }}
                className="font-label-md text-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
                to={"./living-rooms"}
              >
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {livingRoomProducts.products.slice(0, 2).map((product) => {
                const isFavorited = favoriteIds.includes(product.id);
                const isAdded = addedIds.includes(product.id);
                return (
                  <div
                    key={product.id}
                    className="group relative overflow-hidden bg-white rounded-xl [transition:transform_0.3s,box-shadow_0.3s] hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(111,52,41,0.08)] md:col-span-1"
                  >
                    <div className="aspect-video overflow-hidden">
                      <Link
                        to={`/shop/card-details-view#${product.name}`}
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
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                            {product.series}
                          </p>
                          <h4 className="font-headline-md text-headline-md text-on-surface mb-1">
                            {product.name}
                          </h4>
                        </div>
                        <p className="text-primary font-semibold text-lg">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Section 3: Dining */}
        {isSectionVisible("dining") && diningRoomProducts && (
          <section className="mb-stack-lg reveal-on-scroll">
            <div className="flex items-end justify-between mb-stack-sm">
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
                Dining
              </h3>
              <Link
                className="font-label-md text-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
                to={"./dining-rooms"}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "auto" });
                }}
              >
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {diningRoomProducts.products.slice(0, 2).map((product) => {
                const isFavorited = favoriteIds.includes(product.id);
                const isAdded = addedIds.includes(product.id);
                return (
                  <div
                    key={product.id}
                    className="group relative overflow-hidden bg-white rounded-xl product-card-hover transition-all duration-300 md:col-span-1"
                  >
                    <div className="aspect-video overflow-hidden">
                      <Link
                        to={`/shop/card-details-view#${product.name}`}
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
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                            {product.series}
                          </p>
                          <h4 className="font-headline-md text-headline-md text-on-surface mb-1">
                            {product.name}
                          </h4>
                        </div>
                        <p className="text-primary font-semibold text-lg">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Section 4: Bedroom */}
        {isSectionVisible("bedroom") && bedroomProducts && (
          <section className="mb-stack-lg reveal-on-scroll">
            <div className="flex items-end justify-between mb-stack-sm">
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
                Bedroom
              </h3>
              <Link
                className="font-label-md text-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
                to={"./bedrooms"}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "auto" });
                }}
              >
                View All
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
              {bedroomProducts.products.slice(0, 4).map((product) => {
                const isFavorited = favoriteIds.includes(product.id);
                const isAdded = addedIds.includes(product.id);
                return (
                  <div key={product.id} className="group flex flex-col gap-4">
                    <div className="aspect-square bg-surface-container rounded-xl overflow-hidden relative">
                      <Link
                        to={`/shop/card-details-view#${product.name}`}
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
                    <div>
                      <h4 className="font-label-md text-on-surface">
                        {product.name}
                      </h4>
                      <p className="text-on-surface-variant font-label-sm">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Newsletter Subscription */}
        <section className="bg-surface-container rounded-3xl p-8 md:p-16 flex flex-col items-center text-center reveal-on-scroll">
          <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
            Join our community
          </h3>
          <p className="text-on-surface-variant mb-8 max-w-md">
            Receive seasonal curation notes, design inspiration, and early
            access to new collections.
          </p>
          <div className="flex flex-col md:flex-row w-full max-w-md gap-4">
            <input
              className="flex-1 bg-surface-container-lowest border-none rounded-full px-6 py-3 focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/50 outline-none"
              placeholder="Your email address"
              type="email"
            />
            <button className="bg-primary text-white px-8 py-3 rounded-full font-label-md hover:bg-primary-container transition-colors active:scale-95 duration-200">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
