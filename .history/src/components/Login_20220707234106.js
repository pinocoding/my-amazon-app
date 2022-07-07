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
        <div className="login__containertop"></div>

        <div className="login__newtoamazone">New to amazone</div>
        <button className="login__createaccount">
          Create Account your Amazon account
        </button>
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
    </div>
  );
}

export default Login;
