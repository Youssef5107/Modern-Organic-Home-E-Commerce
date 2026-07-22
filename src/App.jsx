import "./App.css";
import "./index.css";
import Home from "./pages/HomePage/Home";
import BottomNavBar from "./app/components/BottomNavBar";
import Header from "./app/components/Header";
import Shop from "./pages/ShopPage/Shop";
import Cart from "./pages/CartPage/Cart";
import Profile from "./pages/ProfilePage/Profile";
import Checkout from "./pages/CheckoutPage/Checkout";
import { Route, Routes, Navigate } from "react-router-dom";
import CeramicsCollection from "./pages/ceramicsCollectionPage/ceramicsCollection";
import LivingRoomCollection from "./pages/livingRoomCollectionPage/LivingRoomCollection";
import DiningCollection from "./pages/diningCollectionPage/DiningCollection";
import BedroomCollection from "./pages/bedroomCollectionPage/BedroomCollection";
import SavedItems from "./pages/savedItemsPage/SavedItems";

function App() {
  return (
    <>
      <Header />
      <main className="pb-32">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/ceramics" element={<CeramicsCollection />} />
          <Route path="/shop/living-rooms" element={<LivingRoomCollection />} />
          <Route path="/shop/dining-rooms" element={<DiningCollection />} />
          <Route path="/shop/bedrooms" element={<BedroomCollection />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="cart/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/saved-items" element={<SavedItems />} />
        </Routes>
      </main>
      <BottomNavBar />
    </>
  );
}

export default App;
