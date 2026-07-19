import { useState } from "react";

export default function BottomNavBar() {
  const [activeTab, setActiveTab] = useState("home");

  // Hardcoded cart count representation
  const cartItemCount = 2;

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
          <a
            key={item.id}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(item.id);
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
          </a>
        );
      })}
    </nav>
  );
}
