import "./App.css";
import "./index.css";
import Home from "./components/HomePage/Home";
import BottomNavBar from "./components/BottomNavBar";
import Header from "./components/Header";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <BottomNavBar />
    </>
  );
}

export default App;
