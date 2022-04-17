import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const ProductDataContext = createContext();

const ProductDataProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("/api/products");
      const responseData = [...response.data.products];
      setItems((previous) => (previous = responseData));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ProductDataContext.Provider value={{ items }}>
      {children}
    </ProductDataContext.Provider>
  );
};

const useProduct = () => useContext(ProductDataContext);

export { useProduct, ProductDataProvider };
