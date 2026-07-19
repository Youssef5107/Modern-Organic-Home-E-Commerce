import "./App.css";
import "./index.css";
import Home from "./components/HomePage/Home";
import BottomNavBar from "./components/BottomNavBar";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <BottomNavBar />
    </>
  );
}

export default App;
