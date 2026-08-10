import "./App.css";
import "./index.css";
import Home from "./pages/HomePage/Home";
import BottomNavBar from "./components/BottomNavBar";
import Header from "./components/Header";
import Shop from "./pages/ShopPage/Shop";
import Cart from "./pages/cartPage/Cart";
import Profile from "./pages/profilePage/Profile";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  loadUserPreferences,
  syncUserPreferences,
} from "./features/toggleProductsInfo/toggleProductsInfoSlice";
import { fetchCurrentUser } from "./features/apis/apiSlice";
import CeramicsCollection from "./pages/ceramicsCollectionPage/CeramicsCollection";
import LivingRoomCollection from "./pages/livingRoomCollectionPage/LivingRoomCollection";
import DiningCollection from "./pages/diningCollectionPage/DiningCollection";
import BedroomCollection from "./pages/bedroomCollectionPage/BedroomCollection";
import SavedItems from "./pages/savedItemsPage/SavedItems";
import OurStory from "./pages/ourStoryPage/OurStory";
import CardDetailsView from "./pages/cardDetailsViewPage/CardDetailsView";
import AuthModal from "./components/AuthModal";
import LogoutConfirm from "./components/LogoutConfirm";
import LoadingOverlay from "./components/LoadingOverlay";
import { useSelector } from "react-redux";
import Shipment from "./pages/checkoutPages/shipmentPage/Shipment";
import Payment from "./pages/checkoutPages/paymentPage/Payment";
import Review from "./pages/checkoutPages/reviewPage/Review";
import PaymentMethods from "./pages/paymentMethodsPage/PaymentMethods";
import { ToastNotification } from "./components/ToastNotification";
import ComingSoon from "./pages/commingSoonPage/ComingSoon";
import ShippingAddresses from "./pages/shippingAddressesPage/ShippingAddresses";
import Lookbook from "./pages/lookbookPage/Lookbook";
import OrderConfirmation from "./pages/orderConfirmationPage/OrderConfirmation";
function App() {
  const location = useLocation();
  const pathName = location.pathname;
  const dispatch = useDispatch();
  const isLogoutConfirmOpen = useSelector(
    (state) => state.apis.isLogoutConfirmOpen,
  );

  const getPageMetadata = (pathname) => {
    const pages = [
      {
        test: /^\/home$/,
        title: "Home | Modern Organic Home",
        description:
          "Modern Organic Home offers handcrafted home goods for mindful, modern interiors.",
      },
      {
        test: /^\/home\/our-story$/,
        title: "Our Story | Modern Organic Home",
        description:
          "Discover the story behind Modern Organic Home and our commitment to handcrafted, sustainable design.",
      },
      {
        test: /^\/home\/lookbook$/,
        title: "Lookbook | Modern Organic Home",
        description:
          "Explore curated interiors and slow living inspiration in the Modern Organic Home lookbook.",
      },
      {
        test: /^\/shop/,
        title: "Shop | Modern Organic Home",
        description:
          "Browse handcrafted furniture, ceramics, and décor for thoughtfully curated living spaces.",
      },
      {
        test: /^\/cart/,
        title: "Cart | Modern Organic Home",
        description:
          "Review your selected items and prepare for checkout with Modern Organic Home.",
      },
      {
        test: /^\/profile/,
        title: "Profile | Modern Organic Home",
        description:
          "Manage your account, saved items, payment methods, and shipping details.",
      },
      {
        test: /^\/order-confirmation$/,
        title: "Order Confirmation | Modern Organic Home",
        description:
          "Thank you for your order. Your handcrafted items are on the way.",
      },
    ];

    return (
      pages.find((page) => page.test.test(pathname)) ?? {
        title: "Modern Organic Home",
        description:
          "Modern Organic Home is a curated destination for handcrafted home décor and furniture.",
      }
    );
  };

  useEffect(() => {
    if (typeof document === "undefined") return;

    const { title, description } = getPageMetadata(pathName);
    document.title = title;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", description);
    }
  }, [pathName]);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("authToken")) {
      dispatch(fetchCurrentUser());
      dispatch(loadUserPreferences());
    }

    const handlePreferencesChanged = () => {
      if (typeof window !== "undefined" && localStorage.getItem("authToken")) {
        dispatch(syncUserPreferences());
      }
    };

    window.addEventListener(
      "user-preferences-changed",
      handlePreferencesChanged,
    );

    return () => {
      window.removeEventListener(
        "user-preferences-changed",
        handlePreferencesChanged,
      );
    };
  }, [dispatch]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only fixed top-4 left-4 z-50 rounded-full bg-white px-4 py-2 text-sm font-medium text-primary shadow-lg"
      >
        Skip to main content
      </a>
      {pathName == "/profile/saved-items" ||
      pathName.includes("card-details-view") ||
      isLogoutConfirmOpen ||
      pathName == "/order-confirmation" ? null : (
        <Header />
      )}
      <main
        id="main-content"
        className={`${pathName == "/home/our-story" || pathName == "/profile/saved-items" || pathName.includes("card-details-view") || pathName == "/cart/checkout/payment" || pathName == "/cart/checkout/review" || pathName == "/home/lookbook" ? "pb-20" : pathName == "/order-confirmation" ? "pb-0" : "pb-32"}`}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/our-story" element={<OurStory />} />
          <Route path="/home/lookbook" element={<Lookbook />} />
          <Route path="/home/card-details-view" element={<CardDetailsView />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/card-details-view" element={<CardDetailsView />} />
          <Route
            path="/shop/ceramics/card-details-view"
            element={<CardDetailsView />}
          />
          <Route
            path="/shop/living-rooms/card-details-view"
            element={<CardDetailsView />}
          />
          <Route
            path="/shop/dining-rooms/card-details-view"
            element={<CardDetailsView />}
          />
          <Route
            path="/shop/bedrooms/card-details-view"
            element={<CardDetailsView />}
          />
          <Route path="/shop/ceramics" element={<CeramicsCollection />} />
          <Route path="/shop/living-rooms" element={<LivingRoomCollection />} />
          <Route path="/shop/dining-rooms" element={<DiningCollection />} />
          <Route path="/shop/bedrooms" element={<BedroomCollection />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/card-details-view" element={<CardDetailsView />} />
          <Route path="cart/checkout/shipment" element={<Shipment />} />
          <Route path="cart/checkout/payment" element={<Payment />} />
          <Route path="cart/checkout/review" element={<Review />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/auth" element={<AuthModal />} />
          <Route path="/profile/saved-items" element={<SavedItems />} />
          <Route
            path="/profile/saved-items/card-details-view"
            element={<CardDetailsView />}
          />
          <Route
            path="/profile/shipping-addresses"
            element={<ShippingAddresses />}
          />{" "}
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/profile/payment-methods" element={<PaymentMethods />} />
          <Route path="/profile/account-settings" element={<ComingSoon />} />
          <Route path="/profile/order-history" element={<ComingSoon />} />
          <Route path="/profile/active-orders" element={<ComingSoon />} />
        </Routes>
      </main>
      <LoadingOverlay />
      {isLogoutConfirmOpen || pathName == "/order-confirmation" ? null : (
        <BottomNavBar />
      )}
      <LogoutConfirm /> <ToastNotification />
    </>
  );
}

export default App;
