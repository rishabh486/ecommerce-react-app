import "./App.css";
import ProductPages from "./Pages/Product-Page/ProductPage";
import CartPage from "./Pages/Cart-Page/CartPage";
import { Routes, Route } from "react-router-dom";
import WishlistPage from "./Pages/Wishlist-Page/WishlistPage";
import SignupPage from "./Pages/Signup-Page/Signup";
import SignInPage from "./Pages/SignIn-Page/SignInPage";
import Navbar from "./Components/navbar/navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPages />} />
        <Route path="/signup-page" element={<SignupPage />} />
        <Route path="/signin-page" element={<SignInPage />} />
        <Route path="/product-page" element={<ProductPages />} />
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/wishlist-page" element={<WishlistPage />} />
      </Routes>
    </div>
  );
}

export default App;
