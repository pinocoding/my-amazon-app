import React, { useContext } from "react";
import { EmailContext } from "./store/EmailContext";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./Login.css";
import { DialogContentText } from "@mui/material";

function Login() {
  const context = useContext(EmailContext);
  console.log(context.email);
  console.log(context.setEmail;

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
            <h5>Email or mobile phone number</h5>
            <input
              className="login__input"
              type="text"
              value={context.email}
              onChange={(e) => context.setEmail(e.target.value)}
            />
            <Link to="/SignIn">
              <p className="login__button">
                <button>Continue</button>
              </p>
            </Link>

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

        <div className="login__newtoamazone">
          <h5>New to Amazone ?</h5>
        </div>
        <Link to="/CreateAccount">
          <button className="login__buttontwo">
            Create Account your Amazon account
          </button>
        </Link>

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

export default Login;
