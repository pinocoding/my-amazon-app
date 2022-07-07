import React from "react";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./Login.css";

function Login() {
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
        <h1>Sign-in</h1>
        <form className="login__form">
          <h5>Email or mobile phone number</h5>
          <input className="login__input" type="text" />
          <p className="login__button">
            <button>Continue</button>
          </p>
          <p className="login__text">
            By continuing, you agree to Amazon's
            <a href="#">Conditions of Use</a> and &nbsp
            <a href="#">Privacy Notice</a>
          </p>
          <p>
            <ArrowRightIcon /> <a href="tel:+123456789">Need help ?</a>
          </p>
        </form>
        <div>New to amazone</div>
        <button>Create your Amazon account</button>
      </div>
      <ul>
        <li>
          <a href=""></a>Condition of Use
        </li>
        <li>
          <a href=""></a>Privacy Notice
        </li>
        <li>
          <a href=""></a>Help
        </li>
      </ul>
    </div>
  );
}

export default Login;
