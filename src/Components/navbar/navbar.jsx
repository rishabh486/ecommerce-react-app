import React from 'react'
import  "./navbar.css"
import {useCart} from "../../context/cart-context"
import {Link} from "react-router-dom"
import {useAuth} from "../../context/auth-context"
function Navbar() {
    const {state:{tokenExists}, LogOutHandler}=useAuth()
    const {state, dispatch:cartDispatch}=useCart()
    const {cart} = state
    function getNavLinks(){
        if(tokenExists){
            return(
                <>
                    <Link to="/wishlist-page"> <a>Whishlist</a></Link>
                    <a>
                    <div class="notification">
                        <div class="icon-badge">
                            <button type="button" class="icon-button" id="cart-button">
                                <span>
                                <Link to="/cart-page"> <img class="icon-img" src="/Images/icons8-trolley-cart-64.png" /></Link>
                                </span>
                            </button>
                            <span class="icon-badge-number">
                                {cart?.length}
                            </span>

                        </div>
                    </div>
                </a>
                <button onClick={()=>LogOutHandler(cartDispatch)}>Logout</button>

                </>
            )
        } else {
            return<>
                <Link to="/signin-page"><a >Signin</a></Link> 
                <Link to="/signup-page"><a >Signup</a></Link> 
</>
        }
    }
    return (
 <div> 
    <div className="navbar">
        <div class='brand'>
            <h2>Puma</h2>
        </div>

        <div class="leftside">
            <div class="links">
            <Link to="/product-page">  <a href="">Home</a></Link>
            {getNavLinks()}
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