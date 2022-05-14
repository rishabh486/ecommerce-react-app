import { useContext, createContext, useReducer } from "react";
import { useProduct } from "./product-context";
import { cartReducer } from "../reducers/cart-reducer";
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const { items } = useProduct();
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: 0,
    totalPrice: 0,
    items: items,
    carts: [],
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
