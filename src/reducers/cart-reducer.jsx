export function cartReducer(state, action) {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cartItems: state.cartItems + 1,
          totalPrice: state.totalPrice + action.payload.price,
          carts: [...state.carts, { ...action.payload }],
        };
     
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cartItems: state.cartItems - 1,
          totalPrice: state.totalPrice - action.payload.price,
        };
        case "ADD_TO_WISHLIST":
          return {
            ...state,
    
            wishlist: [...state.wishlist, { ...action.payload }],
            wishlistItems:state.wishlistItems +1,
          };
        case "REMOVE_FROM_WISHLIST":
          return {
            ...state,
            wishlistItems: state.wishlistItems - 1,
           
          };
      default:
        return state;
    }
  }