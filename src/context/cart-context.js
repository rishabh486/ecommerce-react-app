import { useContext, createContext, useReducer } from "react";
import { useProduct } from "./product-context";
import { cartReducer } from "../reducers/reducer";
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const { items } = useProduct();
  const [state, dispatch] = useReducer(cartReducer, {
    totalPrice: 0,
    items: items,
    cart: [],
    wishlist: [],
    wishlistItems: 0,
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
