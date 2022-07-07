import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@mui/icons-material/ArrowRight";
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
      <div className="Login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email or mobile phone number</h5>
          <input type="text" />
          <button>Continue</button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <p></p>
        </form>
        <p></p>
      </div>
    </div>
  );
}

export default Login;
