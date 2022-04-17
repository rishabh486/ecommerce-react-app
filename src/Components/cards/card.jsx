import React from "react";
import { useProduct } from "../../context/product-context"
import { favourite_icon } from "../../Assets/index";
import "./card.css";
function ProductCard() {
  const { items } = useProduct();
 

  return (
    <div>
      {items.map((item) => (
        <div className="product-grid">
          <div class="card-exit">
            <div class="card-img">
              <img
                src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16045848/2021/12/13/c42ef067-9fbe-4077-a48c-fca6331796ab1639383810735-Nike-Court-Vision-Low-Mens-Shoes-7251639383810387-1.jpg"
                class="cross-image"
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
               
                class="button-container-button primary-button cart"
              >
                Add To Cart
              </button>
            </div>
            <button class="exit-button">
              <span>
                <img
                 
                  
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