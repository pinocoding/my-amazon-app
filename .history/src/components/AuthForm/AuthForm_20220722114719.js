import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../DataLayer/Datalayer";

import { auth, fs } from "../firebase";
import "../AuthForm/AuthStyle.css";

function CreateAccount() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignup = context.handleSignup;

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
            <h5>Name </h5>
            <input
              className="login__input"
              type="text"
              value={context.fullName}
              onChange={(e) => context.setFullName(e.target.value)}
            />
            <h5>Mobile number or email</h5>
            <input
              className="login__input"
              type="text"
              value={context.email}
              onChange={(e) => context.setEmail(e.target.value)}
            />
            <p className="login__errorMsg">{context.emailError}</p>
            <h5>Password</h5>
            <input
              className="login__input"
              type="password"
              value={context.password}
              onChange={(e) => context.setPassword(e.target.value)}
            />
            <p className="login__errorMsg">{context.passwordError}</p>

            {/* <h5>Re-enter password</h5>
            <input className="login__input" type="password" /> */}
            <p className="login__button">
              <button onClick={handleSignup}>Create account</button>
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
