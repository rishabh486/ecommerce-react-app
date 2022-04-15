import React from "react";
import ProductCard from "../../Components/cards/card";
import Navbar from "../../Components/navbar/navbar";
import Sidebar from "../../Components/sidebar/sidebar";

import "./Productpage.css";
function ProductPages() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <ProductCard />
    </div>
  );
}

export default ProductPages;
