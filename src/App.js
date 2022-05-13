import "./App.css";
import ProductPages from "./Pages/Product-Page/ProductPage";
import CartPage from "./Pages/Cart-Page/CartPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductPages />} />
        <Route path="/cart-page" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
