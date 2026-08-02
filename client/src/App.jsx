import "./App.css";
import "./index.css";
import Home from "./pages/HomePage/Home";
import BottomNavBar from "./app/components/BottomNavBar";
import Header from "./app/components/Header";
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
import CeramicsCollection from "./pages/ceramicsCollectionPage/CeramicsCollection";
import LivingRoomCollection from "./pages/livingRoomCollectionPage/LivingRoomCollection";
import DiningCollection from "./pages/diningCollectionPage/DiningCollection";
import BedroomCollection from "./pages/bedroomCollectionPage/BedroomCollection";
import SavedItems from "./pages/savedItemsPage/SavedItems";
import AccountSettings from "./pages/accountSettingsPage/AccountSettings";
import OurStory from "./pages/ourStoryPage/OurStory";
import CardDetailsView from "./pages/cardDetailsViewPage/CardDetailsView";
import AuthModal from "./app/components/AuthModal";
import LogoutConfirm from "./app/components/LogoutConfirm";
import { useSelector } from "react-redux";
import Shipment from "./pages/checkoutPages/shipmentPage/Shipment";
import Payment from "./pages/checkoutPages/paymentPage/payment";
import Review from "./pages/checkoutPages/reviewPage/Review";

function App() {
  const location = useLocation();
  const pathName = location.pathname;
  const dispatch = useDispatch();
  const isLogoutConfirmOpen = useSelector(
    (state) => state.apis.isLogoutConfirmOpen,
  );

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("authToken")) {
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
      {pathName == "/profile/account-settings" ||
      pathName == "/profile/saved-items" ||
      pathName.includes("card-details-view") ||
      isLogoutConfirmOpen ? null : (
        <Header />
      )}
      <main
        className={`${pathName == "/home/our-story" || pathName == "/profile/saved-items" || pathName == "/profile/account-settings" || pathName.includes("card-details-view") || pathName == "/cart/checkout/payment" || pathName == "/cart/checkout/review" ? "pb-20" : "pb-32"}`}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/our-story" element={<OurStory />} />
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
            path="/profile/account-settings"
            element={<AccountSettings />}
          />
        </Routes>
      </main>
      {isLogoutConfirmOpen ? null : <BottomNavBar />}
      <LogoutConfirm />{" "}
    </>
  );
}

export default App;
