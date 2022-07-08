import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function SignIn() {
  const [password, setPassword] = useState("");
  const HandleSignIn = (e) => {};
  const HandleSignIn = (e) => {
    //
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .auth((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
    //
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
          <h1>Sign-in</h1>
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
              <button type="submit" onClick={HandleSignIn}>
                Sign-In
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
