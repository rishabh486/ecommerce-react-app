import React from 'react'
import "./wishlist.css"
import { useCart } from '../../context/cart-context'

const Wishlist=()=> {
    const{state:{wishlist},dispatch}=useCart()
  return (
    <div>
      <h1>Wishlist({wishlist?.length})</h1>
        {wishlist.map((item)=>{
            return(
                <div className="product-grid">
                <div class="card-exit ">
                  <div class="card-img">
                    <img
                      src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16045848/2021/12/13/c42ef067-9fbe-4077-a48c-fca6331796ab1639383810735-Nike-Court-Vision-Low-Mens-Shoes-7251639383810387-1.jpg"
                      class="cross-image "
                    />
                  </div>
                  <div class="card-content">
                    <p class="card-body">{item.title}</p>
                    <span class="price">$50</span>
                    <del class="original-price">$120</del>
                    <b class="discount-price">24% OFF</b>
                  </div>
                  <div class="card-button">
                    <button
                      onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
                      class="button-container-button primary-button cart"
                    >
                      ADD TO CART
                    </button>
                    <button
                      onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
                      class="button-container-button primary-button cart"
                    >
                      REMOVE FROM WISHLIST
                    </button>
                  </div>
                  <button class="exit-button">
                    <span>
                      <img src="" alt=""class="exit-button-cross" />
                    </span>
                  </button>
                </div>
              </div>
            )
        })}
    </div>
  )
}

export default Wishlist