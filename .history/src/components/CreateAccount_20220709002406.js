import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";

function CreateAccount() {
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
          <h1>Create account</h1>
          <form className="login__form">
            <h5>Your name</h5>
            <input className="login__input" type="text" />
            <h5>Mobile number or email</h5>
            <input className="login__input" type="text" />
            <h5>Password</h5>
            <input className="login__input" type="password" />
            <h5>Re-enter password</h5>
            <input className="login__input" type="password" />

            <p className="login__button">
              <button>Continue</button>
            </p>
            <p className="login__text">
              By continuing, you agree to Amazon's &nbsp;
              <a href="#">Conditions of Use</a> &nbsp;and &nbsp;
              <a href="#">Privacy Notice</a>
            </p>
          </form>
        </div>

        <ul className="login__ect">
          <li>
            <a href="#">Condition of Use</a>
          </li>
          <li>
            <a href="#">Privacy Notice</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
        <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
      </div>
    </div>
  );
}

export default CreateAccount;
