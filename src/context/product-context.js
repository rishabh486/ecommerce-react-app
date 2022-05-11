import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import { reducerFn } from "../reducers/filter-reducer";
import { initialState } from "../reducers/initial-state";

const ProductDataContext = createContext();

const ProductDataProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [state, dispatch] = useReducer(reducerFn, initialState);
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
    <ProductDataContext.Provider value={{ items, state, dispatch }}>
      {children}
    </ProductDataContext.Provider>
  );
};

const useProduct = () => useContext(ProductDataContext);

export { useProduct, ProductDataProvider };
