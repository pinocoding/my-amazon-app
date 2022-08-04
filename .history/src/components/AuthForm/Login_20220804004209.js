import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import { Link } from "react-router-dom";
import { DataContext } from "../DataLayer/Datalayer";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "../AuthForm/AuthStyle.css";

function Login() {
  const { t } = useTranslation(["common"]);
  const context = useContext(DataContext);
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
          <h1>{t("Sign-In")}</h1>
          <form className="login__form">
            <h5>{t("Email or mobile phone number")}</h5>
            <input
              className="login__input"
              type="email"
              value={context.email}
              onChange={(e) => context.setEmail(e.target.value)}
            />
            <Link to="/SignIn">
              <p className="login__button">
                <button>{t("Continue")}</button>
              </p>
            </Link>

            <p className="login__text">
              {t("By continuing, you agree to Amazons")}
            </p>
            <p className="login__help">
              <ArrowRightIcon /> <a href="/#">{t("Need help ?")}</a>
            </p>
          </form>
        </div>

        <div className="login__newtoamazone">
          <h5>New to Amazone ?</h5>
        </div>

        <button className="login__buttontwo">
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/CreateAccount"
          >
            Create your Amazon account
          </Link>
        </button>

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

export default Login;
