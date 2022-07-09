import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);
  const navigate = useNavigate;
  const signIn = (email, password) => {
    auth
      .signInWithEmailAndPassword(email.toString(""), password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

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
          <form className="login__form signin__form">
            <div className="signin__password">
              <h5>Password</h5>
              <a href="#">Forgot your password ?</a>
            </div>

            <input
              className="login__input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="login__button">
              <button type="submit" onClick={signIn}>
                Sign In
              </button>
            </p>
            <div className="login__text login__checkbox">
              <input type="checkbox" name="rememberMe" />
              <p>
                &nbsp;Keep me signed in. <a href="#">Details</a>
              </p>
            </div>
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

export default SignIn;
