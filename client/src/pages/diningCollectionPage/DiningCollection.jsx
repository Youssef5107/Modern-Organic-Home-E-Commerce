import { useState, useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchWithLoading } from "../../lib/fetchWithLoading";
import {
  toggleFavorite,
  toggleAddedProducts,
  viewCardDetails,
} from "../../features/toggleProductsInfo/toggleProductsInfoSlice";

export default function DiningCollection() {
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- Filter & Sort States ---
  const [activeCategory, setActiveCategory] = useState("all");
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [showNewArrivalsOnly, setShowNewArrivalsOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(2000);

  const [sortOption, setSortOption] = useState("featured");
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  // Animation state key to force grid animation replay on filter change
  const [animationKey, setAnimationKey] = useState(0);

  const sortDropdownRef = useRef(null);

  const categories = [
    { id: "all", label: "All collection" },
    { id: "ceramics", label: "Ceramics" },
    { id: "serveware", label: "Serveware" },
    { id: "textiles", label: "Textiles" },
  ];

  const sortOptions = [
    { id: "featured", label: "Featured" },
    { id: "price-asc", label: "Price: Low to High" },
    { id: "price-desc", label: "Price: High to Low" },
  ];

  // Helper function to update state and restart entrance animation
  const triggerGridAnimation = () => {
    setAnimationKey((prev) => prev + 1);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sortDropdownRef.current &&
        !sortDropdownRef.current.contains(event.target)
      ) {
        setIsSortDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    fetchWithLoading(
      "https://my-e-commerce-website-production.up.railway.app/api/shop/collections/dining",
    )
      .then((res) => res.json())
      .then((data) => {
        setCollection(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const dispatch = useDispatch();
  const favoriteIds = useSelector((state) => state.ProductsInfo.favoriteIds);
  const addedIds = useSelector((state) => state.ProductsInfo.addedIds);

  const filteredProducts = useMemo(() => {
    if (!collection?.products) return [];

    return collection.products
      .filter((product) => {
        if (activeCategory !== "all") {
          const matchTarget = (
            product.category ||
            product.series ||
            ""
          ).toLowerCase();
          if (!matchTarget.includes(activeCategory.toLowerCase())) {
            return false;
          }
        }

        if (showNewArrivalsOnly && !product.is_new_arrival) {
          return false;
        }

        if (product.price > maxPrice) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortOption === "price-asc") return a.price - b.price;
        if (sortOption === "price-desc") return b.price - a.price;
        return 0;
      });
  }, [collection, activeCategory, showNewArrivalsOnly, maxPrice, sortOption]);

  if (loading) return null;

  const totalProductCount =
    filteredProducts.length + (activeCategory === "all" ? 0 : 0);

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-md animate-page-enter">
      {/* Header & Description Section */}
      <section className="mb-stack-md reveal-on-scroll">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-label-md text-label-md text-primary mb-2 uppercase tracking-widest">
              COLLECTION
            </p>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">
              Gather & Dine
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Elevate your gathering rituals with our curated collection of
              handcrafted kitchenware. From artisanal ceramics to sustainably
              sourced wood, each piece is designed for the tactile beauty of
              daily use.
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md self-end">
            <span className="text-primary font-semibold">
              {totalProductCount}
            </span>{" "}
            Products
          </div>
        </div>
      </section>

      {/* Filter & Sort Bar (High Z-Index so Dropdown floats ABOVE cards) */}
      <section className="relative z-50 mb-stack-md reveal-on-scroll">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-gutter">
          {/* Categories */}
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  triggerGridAnimation();
                }}
                className={`whitespace-nowrap px-4 py-2 rounded-xl font-label-md text-label-md transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-secondary-container/50 text-primary border border-primary/20 shadow-sm"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-variant/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 border-outline-variant pt-4 md:pt-0">
            {/* Filter Toggle Button */}
            <button
              onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-label-md text-label-md transition-colors cursor-pointer ${
                isFilterPanelOpen || showNewArrivalsOnly || maxPrice < 2000
                  ? "bg-primary/10 text-primary"
                  : "text-on-surface-variant hover:bg-surface-container-low"
              }`}
            >
              <span className="material-symbols-outlined text-sm">tune</span>
              Filter
            </button>

            {/* Animated Modern Sort Dropdown */}
            <div className="relative" ref={sortDropdownRef}>
              <button
                onClick={() => setIsSortDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-2 px-4 py-2 bg-surface-container-low/50 hover:bg-surface-container-low rounded-xl text-on-surface font-label-md text-label-md transition-all cursor-pointer ${
                  isSortDropdownOpen ? "ring-2 ring-primary/20" : ""
                }`}
              >
                Sort
              </button>

              {/* Animated Dropdown Panel */}
              <div
                className={`absolute right-0 top-full mt-2 w-48 bg-surface rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-outline-variant/20 py-2 z-50 transition-all duration-200 ease-out origin-top-right ${
                  isSortDropdownOpen
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                {sortOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setSortOption(opt.id);
                      setIsSortDropdownOpen(false);
                      triggerGridAnimation();
                    }}
                    className="w-full text-left px-4 py-2.5 flex items-center gap-3 hover:bg-surface-container-low text-on-surface font-body-sm text-body-sm transition-colors cursor-pointer"
                  >
                    <span className="w-4 flex justify-center text-primary">
                      {sortOption === opt.id && (
                        <span className="material-symbols-outlined text-[16px] font-bold">
                          check
                        </span>
                      )}
                    </span>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animated Expandable Filter Drawer */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isFilterPanelOpen
              ? "max-h-40 opacity-100 mt-4"
              : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="p-5 bg-surface-container-low rounded-xl border border-outline-variant/30 flex flex-wrap items-center gap-8">
            {/* New Arrivals Toggle */}
            <label className="flex items-center gap-2 cursor-pointer font-label-md text-label-md text-on-surface">
              <input
                type="checkbox"
                checked={showNewArrivalsOnly}
                onChange={(e) => {
                  setShowNewArrivalsOnly(e.target.checked);
                  triggerGridAnimation();
                }}
                className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer"
              />
              New Arrivals Only
            </label>

            {/* Max Price Range Slider */}
            <div className="flex items-center gap-3 flex-1 max-w-xs">
              <span className="font-label-md text-label-md text-on-surface-variant min-w-[100px]">
                Max Price: ${maxPrice}
              </span>
              <input
                type="range"
                min="10"
                max="2000"
                step="10"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(Number(e.target.value));
                  triggerGridAnimation();
                }}
                className="w-full accent-primary cursor-pointer"
              />
            </div>

            {/* Reset Filters */}
            <button
              onClick={() => {
                setActiveCategory("all");
                setShowNewArrivalsOnly(false);
                setMaxPrice(2000);
                setSortOption("featured");
                triggerGridAnimation();
              }}
              className="font-label-sm text-label-sm text-primary underline hover:opacity-80 ml-auto cursor-pointer"
            >
              Reset All
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid - Key prop forces page entrance animation to replay */}
      <section
        key={animationKey}
        className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-gutter gap-y-stack-md reveal-on-scroll animate-page-enter relative z-0"
      >
        {filteredProducts.map((product) => {
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
                  ${product.price}
                </span>
              </div>
            </div>
          );
        })}
      </section>

      {/* Pagination / Progress Bar Section */}
      <div className="mt-stack-lg flex flex-col items-center gap-4">
        <p className="font-body-md text-body-md text-on-surface-variant">
          Showing {totalProductCount} products
        </p>
        <div className="w-64 h-1 bg-surface-container-high rounded-full overflow-hidden">
          <div className="w-full h-full bg-primary/80 transition-all duration-500"></div>
        </div>
        <button className="mt-2 px-8 py-3.5 bg-[#5D2B22] text-white rounded-full font-label-md text-label-md hover:bg-[#4A221B] active:scale-95 transition-all shadow-md">
          Load More Pieces
        </button>
      </div>
    </div>
  );
}
