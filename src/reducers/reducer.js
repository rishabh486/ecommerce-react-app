import { AddToCart, RemoveFromCart } from "./cart-reducer";
export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: action.payload.cart };
    case "REMOVE_FROM_CART":
      return { ...state, cart: action.payload.cart };
  }
}
