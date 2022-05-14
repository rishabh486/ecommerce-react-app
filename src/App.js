import "./App.css";
import ProductPages from "./Pages/Product-Page/ProductPage";
import CartPage from "./Pages/Cart-Page/CartPage";
import { Routes, Route } from "react-router-dom";
import WishlistPage from "./Pages/Wishlist-Page/WishlistPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductPages />} />
        <Route path="/product-page" element={<ProductPages />} />
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/wishlist-page" element={<WishlistPage />} />
      </Routes>
    </div>
  );
}

export default App;
