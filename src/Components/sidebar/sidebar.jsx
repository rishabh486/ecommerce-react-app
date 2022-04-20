import React from 'react'
import { useProduct } from '../../context/product-context'
import  "./sidebar.css"
function Sidebar() {
    const{state,dispatch}=useProduct()
    const{filter}=state

     return (
    <div>
          <div className="side-bar">
            <div class="side-bar-heading">
                <div>
                    <h1>Filter</h1>
                </div>
                <div>
                    <h1>Clear</h1>
                </div>
            </div>
            <div class="price-heading">
                <h2>Price</h2>
                <div class="price-container">

                    <input type="range" name="user-choice-range" id="user-choice-range" min="0" max="100" value="30"/>
                    <option value="0" label="0%"></option>
                </div>
            </div>
            <div class="category-heading">
                <div>
                    <h2>Category</h2>
                </div>
                <div class="category-container">
                    <label for="user-choice-check">Men's Clothing</label>
                    <input  
                    
                     value="men"
                     type="checkbox" name="user-choice-check" id="user-choice-check"/>
                </div>
                <div class="category-container">
                    <label for="user-choice-check">Women Clothing</label>
                    <input 
                     
                     value="women"
                    type="checkbox" name="user-choice-check" id="user-choice-check"/>
                </div>
                <div class="category-container">
                    <label for="user-choice-check">Kids Clothing</label>
                    <input 
              type="checkbox"
              
                     name="user-choice-check" id="user-choice-check"/>
                </div>
                <div class="category-container">
                    <label for="user-choice-check">Newborn Clothing</label>
                    <input type="checkbox" name="user-choice-check" id="user-choice-check"/>
                </div>

            </div>
            <div class="rating-heading">
                <div>
                    <h2>Rating</h2>
                </div>
                <div class="rating-container">
                    <label for="user-choice-radio">4stars & above</label>
                    <input 
                    onClick={()=>dispatch({type:"RATING_FILTER",payload:4})}
                    type="radio" name="user-choice-radio" id="user-choice-radio"/>
                </div>
                <div class="rating-container">
                    <label for="user-choice-radio">3stars & above</label>

                    <input 
                     onClick={()=>dispatch({type:"RATING_FILTER",payload:3})}
                    type="radio" name="user-choice-radio" id="user-choice-radio"/>
                </div>
                <div class="rating-container">
                    <label for="user-choice-radio">2stars & above</label>
                    <input
                     onClick={()=>dispatch({type:"RATING_FILTER",payload:2})}
                     type="radio" name="user-choice-radio" id="user-choice-radio"/>
                </div>
                <div class="rating-container">
                    <label for="user-choice-radio">1stars & above</label>

                    <input 
                     onClick={()=>dispatch({type:"RATING_FILTER",payload:1})}
                    type="radio" name="user-choice-radio" id="user-choice-radio"/>
                </div>



            </div>
            <div class="sort-by-heading">
                <div>
                    <h2>Sort-by</h2>
                </div>
                <div class="sort-by-container">
                    <label for="user-choice-radio">Price-Low to High</label>
                    <input 
                    onClick={()=>dispatch({type:"SORT",payload:"LOW_TO_HIGH"})}
                    type="radio" name="user-choice-radio" id="user-choice-radio"/>
                </div>
                <div class="sort-by-container">
                    <label for="user-choice-radio">Price-High to low</label>

                    <input 
                     onClick={()=>dispatch({type:"SORT",payload:"HIGH_TO_LOW"})}
                    type="radio" name="user-choice-radio" id="user-choice-radio"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar