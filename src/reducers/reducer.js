import { AddToCart, RemoveFromCart } from "./cart-reducer";
export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return AddToCart(state, action.payload);
    case "REMOVE_FROM_CART":
      return RemoveFromCart(state, action.payload);
  }
}
