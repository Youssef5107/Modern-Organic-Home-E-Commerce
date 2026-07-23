import "./App.css";
import "./index.css";
import Home from "./pages/HomePage/Home";
import BottomNavBar from "./app/components/BottomNavBar";
import Header from "./app/components/Header";
import Shop from "./pages/ShopPage/Shop";
import Cart from "./pages/CartPage/Cart";
import Profile from "./pages/ProfilePage/Profile";
import Checkout from "./pages/CheckoutPage/Checkout";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import CeramicsCollection from "./pages/ceramicsCollectionPage/ceramicsCollection";
import LivingRoomCollection from "./pages/livingRoomCollectionPage/LivingRoomCollection";
import DiningCollection from "./pages/diningCollectionPage/DiningCollection";
import BedroomCollection from "./pages/bedroomCollectionPage/BedroomCollection";
import SavedItems from "./pages/savedItemsPage/SavedItems";
import AccountSettings from "./pages/accountSettingsPage/AccountSettings";
import OurStory from "./pages/ourStoryPage/OurStory";
import CardDetailsView from "./pages/cardDetailsViewPage/CardDetailsView";

function App() {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <>
      {pathName == "/profile/account-settings" ||
      pathName == "/profile/saved-items" ? null : (
        <Header />
      )}
      <main
        className={`${pathName == "/home/our-story" || pathName == "/profile/saved-items" || pathName == "/profile/account-settings" ? "pb-20" : "pb-32"}`}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/our-story" element={<OurStory />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/card-details-view" element={<CardDetailsView />} />
          <Route path="/shop/ceramics" element={<CeramicsCollection />} />
          <Route path="/shop/living-rooms" element={<LivingRoomCollection />} />
          <Route path="/shop/dining-rooms" element={<DiningCollection />} />
          <Route path="/shop/bedrooms" element={<BedroomCollection />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="cart/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/saved-items" element={<SavedItems />} />
          <Route
            path="/profile/account-settings"
            element={<AccountSettings />}
          />
        </Routes>
      </main>
      <BottomNavBar />
    </>
  );
}

export default App;
