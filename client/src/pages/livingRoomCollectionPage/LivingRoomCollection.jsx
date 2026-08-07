import { Link } from "react-router-dom";
import { useEffect, useState, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleFavorite,
  toggleAddedProducts,
  viewCardDetails,
} from "../../features/toggleProductsInfo/toggleProductsInfoSlice";

export default function LivingRoomCollection() {
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- Filter & Sort States ---
  const [activeCategory, setActiveCategory] = useState("all");
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [showNewArrivalsOnly, setShowNewArrivalsOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(2000);

  const [sortOption, setSortOption] = useState("featured");
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

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

  const triggerGridAnimation = () => {
    setAnimationKey((prev) => prev + 1);
  };

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
    fetch(
      "https://my-e-commerce-website-production.up.railway.app/api/shop/collections/living-room",
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

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-32 animate-page-enter">
      {/* Header & Description */}
      <section className="mt-stack-md md:mt-stack-lg mb-stack-md reveal-on-scroll">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-label-md text-label-md text-primary mb-2 uppercase tracking-widest">
              COLLECTION
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
          <div className="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md self-end">
            <span className="text-primary font-semibold">
              {filteredProducts.length}
            </span>{" "}
            Products
          </div>
        </div>
      </section>

      {/* Filter & Sort Bar */}
      <section className="relative z-50 mb-stack-md reveal-on-scroll">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-gutter">
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

            <div className="relative" ref={sortDropdownRef}>
              <button
                onClick={() => setIsSortDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-2 px-4 py-2 bg-surface-container-low/50 hover:bg-surface-container-low rounded-xl text-on-surface font-label-md text-label-md transition-all cursor-pointer ${
                  isSortDropdownOpen ? "ring-2 ring-primary/20" : ""
                }`}
              >
                Sort
              </button>

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

        {/* Expandable Filter Drawer */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isFilterPanelOpen
              ? "max-h-40 opacity-100 mt-4"
              : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="p-5 bg-surface-container-low rounded-xl border border-outline-variant/30 flex flex-wrap items-center gap-8">
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

      {/* Product Grid */}
      <section
        key={animationKey}
        className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter reveal-on-scroll animate-page-enter relative z-0"
      >
        {filteredProducts.map((product) => {
          const isFavorited = favoriteIds.includes(product.id);
          const isAdded = addedIds.includes(product.id);
          return (
            <div key={product.id} className="product-card group">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-container mb-4 cursor-pointer">
                <Link
                  to={`/shop/living-rooms/card-details-view#${product.name}`}
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
                  className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity card-favorite-btn ${
                    isFavorited
                      ? "card-favorite-btn-active bg-primary text-white"
                      : ""
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
              <div className="flex flex-col gap-1">
                <h3 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {product.series}
                </p>
                <p className="font-label-md text-label-md text-primary mt-1">
                  ${product.price}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* Pagination / Load More Bar matching image design */}
      <div className="mt-stack-lg flex flex-col items-center gap-4">
        <p className="font-body-md text-body-md text-on-surface-variant">
          Showing {filteredProducts.length} products
        </p>
        <div className="w-64 h-1 bg-surface-container-high rounded-full overflow-hidden">
          <div className="w-full h-full bg-primary/80 transition-all duration-500"></div>
        </div>
        <button className="mt-2 px-8 py-3.5 bg-[#5D2B22] text-white rounded-full font-label-md text-label-md hover:bg-[#4A221B] active:scale-95 transition-all shadow-md">
          Load More Pieces
        </button>
      </div>

      {/* Editorial Lookbook Section */}
      <section className="bg-surface-container-low py-stack-lg mt-stack-lg rounded-2xl reveal-on-scroll">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden group cursor-pointer">
            <img
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="A large-scale editorial shot of a complete living room setup featuring the entire collection."
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
              <Link
                to={"/home/lookbook"}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "auto" });
                }}
                className="flex items-center gap-2 group/btn font-label-md text-label-md uppercase tracking-widest border-b border-white pb-1"
              >
                Read Lookbook
                <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
