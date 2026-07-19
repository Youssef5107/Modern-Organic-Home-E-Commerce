import "./App.css";
import "./index.css";
import Home from "./components/HomePage/Home";
import BottomNavBar from "./components/BottomNavBar";
import Header from "./components/Header";
import Shop from "./components/ShopPage/Shop";
import Cart from "./components/CartPage/Cart";
import Profile from "./components/ProfilePage/Profile";
import Checkout from "./components/CheckoutPage/Checkout";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="pb-32">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="cart/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <BottomNavBar />
    </>
  );
}

export default App;
