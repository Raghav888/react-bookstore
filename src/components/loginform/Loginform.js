import React from "react";
import "./loginform.css";

export const LoginForm = () => {
  return (
    <div className="login-main-box">
      <div class="login-box">
        <div class="login-title">
          <h3>Login</h3>
        </div>
        <form class="login-form" action="submit">
          <div class="login-input">
            <label for="email">Email Id: </label>
            <input
              id="email"
              class="text-box text-box-email mantra-textbox-classic mantra-highlight-box"
              type="email"
              placeholder=" xyz@email.com "
              required
            />
          </div>
          <div class="login-input">
            <label for="password">Password: </label>
            <input
              id="password"
              class="text-box mantra-textbox-classic mantra-highlight-box"
              type="password"
              placeholder="  ********** "
              required
            />
          </div>
          <div class="login-input-box">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me"> Remember me</label>
            <div className="forgot-password"> Forgot password</div>
          </div>
          <button class="mantra-button mantra-primary-btn login-button">
            Login
          </button>
          <div class="login-input new-account">
            <a href="signup.html">Create New Account</a>
          </div>
        </form>
      </div>
    </div>
  );
};
