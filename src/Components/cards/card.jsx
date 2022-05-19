import React from "react";
import { useProduct } from "../../context/product-context"
import { useCart } from "../../context/cart-context";
import { favourite_icon } from "../../Assets/index";
import "./card.css";
import { filterByCategory, RatingFilter, SortingFilter } from "../../reducers/filter";
import {AddToCart} from "../../reducers/cart-reducer"
function ProductCard() {
  const { items,state } = useProduct();
  const {state:{cart},dispatch}=useCart()

  const {filter}=state
  const{ratings,sortBy,categoryName}=filter
  const SortedData=SortingFilter(items,sortBy)
  const CategoryData=filterByCategory(SortedData,categoryName)
 const RatingData=RatingFilter(CategoryData,ratings)

  return (
    <div className="product-grid">
      {RatingData.map((item) => (
        <div className="">
          <div class="card-exit">
            <div class="card-img">
              <img
                src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16045848/2021/12/13/c42ef067-9fbe-4077-a48c-fca6331796ab1639383810735-Nike-Court-Vision-Low-Mens-Shoes-7251639383810387-1.jpg"
                class="cross-image"
                alt=""
              />
            </div>
            <div class="card-content">
              <p class="card-body">{item.title}</p>
              <span class="price">${item.price}</span>
              <del class="original-price">$5000</del>
              <b class="discount-price">24% OFF</b>
            </div>
            <div class="card-button">
            {cart.filter((item_) => item_._id == item._id).length ? <button
               onClick={()=>{
                 
              }}
                class="button-container-button primary-button cart"
              >GO TO CART</button>  : <button
               onClick={()=>{
                AddToCart(item,dispatch)  
              }}
                class="button-container-button primary-button cart"
              >ADD TO CART</button> }
              
                
              
            </div>
            <button class="exit-button">
              <span>
                <img
                 
                  onClick={()=>dispatch({type:"ADD_TO_WISHLIST",payload:items})}
                  src={favourite_icon}
                  class="exit-button-cross"
                  alt=""
                />
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;