import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./Login.css";
function SignIn() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          alt="#"
          src="https://help.pacisoft.com/wp-content/uploads/2017/11/amazon-logo-preview.png"
        />
      </Link>
      <div className="login__container">
        <div className="login__containertop">
          <h1>Sign-in</h1>
          <form className="login__form">
            <h5>Password</h5>
            <input className="login__input" type="text" />
            <p className="login__button">
              <button>Sign-In</button>
            </p>
            <p className="login__text">
              By continuing, you agree to Amazon's &nbsp;
              <a href="#">Conditions of Use</a> &nbsp;and &nbsp;
              <a href="#">Privacy Notice</a>
            </p>
            <p className="login__help">
              <ArrowRightIcon /> <a href="#">Need help ?</a>
            </p>
          </form>
        </div>


    </div>
  );
}

export default SignIn;
