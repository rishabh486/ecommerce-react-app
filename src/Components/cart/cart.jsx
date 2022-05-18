import React from 'react'
import {useCart} from "../../context/cart-context"
import {useProduct} from "../../context/product-context"
import "./cart.css"
function Cart() {
    const {state:{carts},dispatch}=useCart()
    const {items}=useProduct()
    const { _id, title, produced, price, quantity, image, ratings } =items
  return (
    <div>
        {carts.map((items)=>{
     return(
        
             <div class="card-horizontal card-margin">
            <div class="img-container horizontal">
                <img src={items.imageSrc} alt=""
                    class="card-img  img-horizontal" />
            </div>
            <div class="card-data">
                <div class="card-header">
                    <h3 class="card-title">{items.title}</h3>
                </div>
                <div class="card-content">
                    <p class="card-body">
                        Court Royal 2 NN Lace-Up Sneakers
                    </p>
                    <span class="price">
                        $50
                    </span>
                    <del class="original-price">
                        $120
                    </del>
                    <b class="discount-price">24% OFF</b>
                </div>
                
                <div className="quantity-container">
                <button
                  className="button button-secondary"
                  onClick={() =>
                    dispatch({ type: "INCREMENT_PRODUCT", payload: items })
                  }
                >
                  +
                </button>
                <h2 className="card-ratings">{2}</h2>
                <button
                  className="button button-secondary"
                  onClick={() =>
                    quantity > 1
                      ? dispatch({
                          type: "DECREMENT_PRODUCT",
                          payload: products,
                        })
                      : dispatch({ type: "REMOVE_CART", payload: _id })
                  }
                >
                  -
                </button>
                </div>
                <div class="btn-container-horizontal">
                    <button onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:_id})}
                    class=" button-container-button primary-button">Remove from Cart</button>

                </div>
                <div class="btn-container-horizontal">
                    <button class=" button-container-button secondary-button">Add to wishlist</button>
                </div>
            </div>
        
        </div>
  ) })} 
     
    </div>
  )
}

export default Cart