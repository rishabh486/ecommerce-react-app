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
  export const AddToCart = (state, items) => {
    (async (product) => {
      try {
        const response = await axios.post(
          "/api/user/cart",
          { items },
          {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    })(product);
    return { ...state, cart: [...state.cart, { ...items, quantity: 1 }] };
  };
  export const RemoveFromCart = (state, id) => {
    (async (id) => {
      try {
        const response = await axios.delete(`/api/user/cart/:${id}`, {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        });
        notificationSuccess("REMOVED FROM CART");
      } catch (error) {
        console.log(error);
        notificationError("GET FAILED");
      }
    })(id);
    const newCart = state.cart.filter((product) => product._id !== id);
    return { ...state, cart: [...newCart] };
  };