import React from "react";
import "./navbar.css";
export function Navbar() {
  return (
    <nav className="mantra-nav">
      <div className="mantra-nav-title">
        <a className="mantra-title" href="index.html">
          BookStore
        </a>
      </div>
      <div className="mantra-nav-search">
        <input
          className="mantra-search-box mantra-textbox-classic mantra-highlight-box"
          placeholder="  Search"
          type="text "
        />
        <button className="mantra-button mantra-primary-btn">
          <i className="fa fa-search"></i> Search
        </button>
      </div>

      <div className="mantra-nav-footer">
        <a href="./Html/login.html">
          <button className="mantra-button mantra-primary-btn mantra-login-btn">
            Login
          </button>
        </a>

        <div className="mantra-badge">
          <a className="mantra-menu-icon" href="./Html/wishlist.html">
            <span className="mantra-icon">
              <i className="fa fa-heart"></i>
              <span className="mantra-count">5</span>
            </span>
          </a>
        </div>
        <div className="mantra-badge">
          <a className="mantra-menu-icon" href="./Html/cart.html">
            <span className="mantra-icon">
              <i className="fa fa-shopping-cart"></i>
              <span className="mantra-count">1</span>
            </span>

            <span className="mantra-cart-button cart-button">Cart</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
