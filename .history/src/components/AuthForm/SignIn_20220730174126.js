import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";
import { Link } from "react-router-dom";

import "../AuthForm/AuthStyle.css";

function SignIn() {
  const context = useContext(AuthContext);

  const handleSignin = context.handleSignin;

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
          <h1>Sign In</h1>
          <form className="login__form">
            <div className="signin__password">
              <h5>Password</h5>
              <a href="/#">Forgot your password ?</a>
            </div>
            <p className="login__errorMsg">{context.passwordError}</p>

            <input
              className="login__input"
              type="password"
              name="password"
              value={context.password}
              onChange={(e) => context.setPassword(e.target.value)}
            />
            <div className="login__button">
              <button type="submit" onClick={handleSignin}>
                Sign In
              </button>
            </div>
            <p className="login__text">
              By continuing, you agree to Amazon's &nbsp;
              <a href="/#">Conditions of Use</a> &nbsp;and &nbsp;
              <a href="/#">Privacy Notice</a>
            </p>
            <p className="login__help">
              <a>href="/#">Need help ?</a>
            </p>
          </form>
        </div>
        <ul className="login__ect">
          <li>
            <a href="/#">Condition of Use</a>
          </li>
          <li>
            <a href="/#">Privacy Notice</a>
          </li>
          <li>
            <a href="/#">Help</a>
          </li>
        </ul>
        <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
      </div>
    </div>
  );
}

export default SignIn;
