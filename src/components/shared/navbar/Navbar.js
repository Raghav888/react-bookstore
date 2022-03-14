import React from "react";
import "./Navbar.css"
export function Navbar(){
    return(
        
    <nav class="mantra-nav">
    <div class="mantra-nav-title">
        <a class="mantra-title" href="index.html"> BookStore </a>
    </div>
    <div class="mantra-nav-search">
        <input class="mantra-search-box mantra-textbox-classic mantra-highlight-box" placeholder="  Search" type="text " />
        <button class="mantra-button mantra-primary-btn">
      <i class="fa fa-search"></i> Search
    </button>
    </div>

    <div class="mantra-nav-footer">
        <a href="./Html/login.html">
            <button class="mantra-button mantra-primary-btn mantra-login-btn">
        Login
      </button>
        </a>

        <div class="mantra-badge">
            <a class="mantra-menu-icon" href="./Html/wishlist.html">
                <span class="mantra-icon">
          <i class="fa fa-heart"></i>
          <span class="mantra-count">5</span>
                </span>
            </a>
        </div>
        <div class="mantra-badge">
            <a class="mantra-menu-icon" href="./Html/cart.html">
                <span class="mantra-icon">
          <i class="fa fa-shopping-cart"></i>
          <span class="mantra-count">1</span>
                </span>

                <span class="mantra-cart-button">Cart</span>
            </a>
        </div>
    </div>
</nav>

    )
}