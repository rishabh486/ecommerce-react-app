import React from "react";
import ProductCard from "../../Components/cards/card";
import Navbar from "../../Components/navbar/navbar";
import Sidebar from "../../Components/sidebar/sidebar";

import "./Productpage.css";
function ProductPages() {
  return (
    <div>
      <Navbar />
      <div className="product-display">
        <Sidebar />
        <div className="product-flex">
          <ProductCard className="product-card" />
        </div>
      </div>
    </div>
  );
}

export default ProductPages;
