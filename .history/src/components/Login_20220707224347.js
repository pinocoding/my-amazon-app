import React from "react";
import "./Login.css";
import{Link} from "react-router-dom"

function Login() {
  return (
    <div className="login">
      <Link to "/">
      <img
        className="login__logo"
        alt="#"
        src="https://help.pacisoft.com/wp-content/uploads/2017/11/amazon-logo-preview.png"
      />
      </Link>
    </div>
  );
}

export default Login;
