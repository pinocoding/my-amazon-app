import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { DataContext } from "../DataLayer/Datalayer";
import { Link } from "react-router-dom";

import "../AuthForm/AuthStyle.css";

function SignIn() {
  const { t } = useTranslation(["common"]);
  const context = useContext(DataContext);

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
          <h1>{t("Sign-In")}</h1>
          <form className="login__form">
            <div className="signin__password">
              <h5>{t("Password")}</h5>
              <h5> {t("Forgot your password ?")}</h5>
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
                {t("Sign-In")}
              </button>
            </div>

            <p className="login__text">
              {t("By continuing, you agree to Amazons")}
            </p>
            <div className="login__text  login__checkbox ">
              <input type="checkbox" name="rememberMe" />
              <p>
                &nbsp;Keep me signed in. <a href="/#">Details</a>
              </p>
            </div>
          </form>
        </div>
        <ul className="login__ect">
          <li>
            <a href="/#">{t("Conditions of Use")}</a>
          </li>
          <li>
            <a href="/#">{t("Privacy Notice")}</a>
          </li>
          <li>
            <a href="/#">{t("Help")}</a>
          </li>
        </ul>
        <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
      </div>
    </div>
  );
}

export default SignIn;
