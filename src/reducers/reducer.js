export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: action.payload.cart };
    case "REMOVE_FROM_CART":
      return { ...state, cart: action.payload.cart };
    case "ADD_TO_WISHLIST":
      return { ...state, wishlist: action.payload.wishlist };
    case "RESET":
      return {
        totalPrice: 0,
        cart: [],
        wishlist: [],
        wishlistItems: 0,
      };
    case "SET_CART":
      return {
        ...state,
        cart: action.payload.cart,
        wishlist: action.payload.wishlist,
      };
    default:
      return state;
  }
}

export function authReducer(state, action) {
  switch (action.type) {
    case "TOKEN_EXISTS":
      return { ...state, tokenExists: true };
    case "TOKEN_REMOVED":
      return { ...state, tokenExists: false };
    default:
      return state;
  }
}
