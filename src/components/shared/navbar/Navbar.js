import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export function Navbar() {
  return (
    <nav className="mantra-nav head-nav nav-main">
      <div className="mantra-nav-title">
        <Link className="mantra-title" to="/">
          BookStore
        </Link>
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
        <Link to="/login">
          <button className="mantra-button mantra-primary-btn mantra-login-btn">
            Login
          </button>
        </Link>

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
