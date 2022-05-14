import React from 'react'
import  "./navbar.css"
import {useCart} from "../../context/cart-context"
import {Link} from "react-router-dom"

function Navbar() {
    const {state:{cartItems}}=useCart()
    return (
 <div> 
    <div className="navbar">
        <div class='brand'>
            <h2>Puma</h2>
        </div>

        <div class="leftside">
            <div class="links">
            <Link to="/product-page">  <a href="">Home</a></Link>
                <Link to="/wishlist-page"> <a>Whishlist</a></Link>
                <a href="/login.html">Login</a>
                <a href="/signup.html">Signup</a>
                <a>
                    <div class="notification">
                        <div class="icon-badge">
                            <button type="button" class="icon-button" id="cart-button">
                                <span>
                                <Link to="/cart-page"> <img class="icon-img" src="/Images/icons8-trolley-cart-64.png" /></Link>
                                </span>
                            </button>
                            <span class="icon-badge-number">
                                {cartItems}
                            </span>

                        </div>
                    </div>
                </a>
            </div>

        </div>
        <div class="rightside">
            <input type="text" placeholder="search.." />
            <button>search</button>
        </div>

    </div>
    
</div>
  )
}

export default Navbar