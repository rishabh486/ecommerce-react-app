import { useEffect, useState } from "react";
import "./App.css";
import ProductPages from "./Pages/Product-Page/ProductPage";
import CartPage from "./Pages/Cart-Page/CartPage";
import { Routes, Route } from "react-router-dom";
import WishlistPage from "./Pages/Wishlist-Page/WishlistPage";
import SignupPage from "./Pages/Signup-Page/Signup";
import Navbar from "./Components/navbar/navbar";
import axios from "axios";

function App() {
  const [tokenExists, setTokenExists] = useState(false);
  useEffect(() => {
    isAuthenticated();
  }, []);

  async function isAuthenticated() {
    const token = await localStorage.getItem("ecom-token");
    if (token) {
      setTokenExists(true);
      console.log("logged in");
    } else {
      setTokenExists(false);
      console.log("Not logged in");
    }
  }
  const getData = async () => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: "rishabffffhhhvfddffhhh@gmail.com",
        password: "rr@123",
      });
      if (response.status == 200) {
        localStorage.setItem("ecom-token", response.data.encodedToken);
      }
      console.log(response);
    } catch (e) {
      console.log(e.response);
    }
  };
  useEffect(() => {
    // getData();
  }, []);
  return (
    <div className="App">
      <Navbar tokenExists={tokenExists} />
      <Routes>
        <Route path="/" element={<ProductPages />} />
        <Route path="/signup-page" element={<SignupPage />} />
        <Route path="/product-page" element={<ProductPages />} />
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/wishlist-page" element={<WishlistPage />} />
      </Routes>
    </div>
  );
}

export default App;
