import React from 'react'
import  "./navbar.css"

function Navbar() {
    return (
 <div> 
    <div className="navbar">
        <div class='brand'>
            <h2>Puma</h2>
        </div>

        <div class="leftside">
            <div class="links">
                <a href="/index.html">Home</a>
                <a>Whishlist</a>
                <a href="/login.html">Login</a>
                <a href="/signup.html">Signup</a>
                <a>
                    <div class="notification">
                        <div class="icon-badge">
                            <button type="button" class="icon-button" id="cart-button">
                                <span>
                                  <img class="icon-img" src="/Images/icons8-trolley-cart-64.png" />
                                </span>
                            </button>
                            <span class="icon-badge-number">
                                0
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