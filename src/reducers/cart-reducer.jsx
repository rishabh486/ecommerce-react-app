import axios from "axios"
export const AddToCart = (state, items) => {
    (async (items) => {
      try {
        const response = await axios.post(
          "/api/user/cart",
          { items },
          {
            headers: {
              authorization: localStorage.getItem("ecom-token"),
            },
          }
        );
      } catch (error) {
        console.log(error.response);
      }
    })(items);
    return { ...state, cart: [state.cart, { ...items, quantity: 1 }] };
  };
  export const RemoveFromCart = (state, id) => {
    (async (id) => {
      try {
        const response = await axios.delete(`/api/user/cart/:${id}`, {
          headers: {
            authorization: localStorage.getItem("ecom-token"),
          },
        });
      } catch (error) {
        console.log(error);
      }
    })(id);
    const newCart = state.cart.filter((product) => product._id !== id);
    return { ...state, cart: [...newCart] };
  };