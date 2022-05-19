import axios from "axios"
export const AddToCart =async (item, dispatch) => {
    try{
      const response = await axios.post(
        "/api/user/cart",
        { product:item },
        {
          headers: {
            authorization: localStorage.getItem("ecom-token"),
          },
        }
      );
      dispatch({type:"ADD_TO_CART",payload:{cart:response.data.cart}})
    }
    catch(err){console.log(err);}
      

  };
  export const RemoveFromCart = async ( id,dispatch) => {
   
      try {
        const response = await axios.delete(`/api/user/cart/${id}`, {
          headers: {
            authorization: localStorage.getItem("ecom-token"),
          },
        });
        dispatch({type:"REMOVE_FROM_CART",payload:{cart:response.data.cart}})
      } catch (error) {
        console.log(error);
      }
    
  };
  export const IncrementCartItem = async ( id,dispatch) => {
   
    try {
      const response = await axios.post(`/api/user/cart/${id}`,{action:{type:"increment"}}, {
        headers: {
          authorization: localStorage.getItem("ecom-token"),
        },
      });
      dispatch({type:"REMOVE_FROM_CART",payload:{cart:response.data.cart}})
    } catch (error) {
      console.log(error);
    }
  
};
export const DecrementCartItem = async ( id,dispatch) => {
   
  try {
    const response = await axios.post(`/api/user/cart/${id}`,{action:{type:"decrement"}}, {
      headers: {
        authorization: localStorage.getItem("ecom-token"),
      },
    });
    dispatch({type:"REMOVE_FROM_CART",payload:{cart:response.data.cart}})
  } catch (error) {
    console.log(error);
  }

};