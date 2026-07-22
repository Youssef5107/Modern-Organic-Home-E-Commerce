import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import data from "../../data/products.json";

export default function BottomNavBar() {
  const location = useLocation();
  const pathname = location.pathname;
  const addedIds = useSelector((state) => state.ProductsInfo.addedIds);
  const quantities = useSelector(
    (state) => state.ProductsInfo.quantities || {},
  );
  const allProducts = data.collections.flatMap((col) => col.products || []);
  const addedProducts = allProducts.filter((product) =>
    addedIds.includes(product.id),
  );
  const cartItemCount = addedProducts.reduce((sum, product) => {
    return sum + (quantities[product.id] || 1);
  }, 0);

  const getActiveTab = () => {
    if (pathname === "/" || pathname === "/home") return "home";
    if (pathname === "/home/our-story") return "home";
    if (pathname === "/shop/ceramics") return "shop";
    if (pathname === "/shop/living-rooms") return "shop";
    if (pathname === "/shop/dining-rooms") return "shop";
    if (pathname === "/shop/bedrooms") return "shop";
    if (pathname === "/shop") return "shop";
    if (pathname === "/cart") return "cart";
    if (pathname === "/cart/checkout") return "cart";
    if (pathname === "/profile") return "profile";
    if (pathname === "/profile/saved-items") return "profile";
    if (pathname === "/profile/account-settings") return "profile";
    return "home";
  };

  const activeTab = getActiveTab();

  const navItems = [
    { id: "home", label: "Home", icon: "home" },
    { id: "shop", label: "Shop", icon: "storefront" },
    { id: "cart", label: "Cart", icon: "shopping_bag", showBadge: true },
    { id: "profile", label: "Profile", icon: "person" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pt-2 pb-6 bg-[#fbf9f4] shadow-[0_-4px_20px_rgba(111,52,41,0.08)] rounded-t-xl">
      {navItems.map((item) => {
        const isActive = activeTab === item.id;

        return (
          <Link
            to={item.id === "home" ? "/home" : `/${item.id}`}
            key={item.id}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "auto" });
            }}
            className={`flex flex-col items-center justify-center px-5 py-1 transition-all active:scale-90 relative rounded-full ${
              isActive
                ? "bg-[#e0e5cc] text-[#626753]"
                : "text-[#534340] hover:text-[#6f3429]"
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-[10px] font-medium mt-0.5">{item.label}</span>

            {/* Conditional Cart Badge */}
            {item.showBadge && cartItemCount > 0 && (
              <span className="absolute top-0 right-4 bg-[#6f3429] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
