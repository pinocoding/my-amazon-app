import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import CircleLoading from "../LoaingPage/CircleLoading";
import { Link } from "react-router-dom";
import { DataContext } from "../DataLayer/Datalayer";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "../AuthForm/AuthStyle.css";

function ForgotPassword() {
  const { t } = useTranslation(["common"]);
  const context = useContext(DataContext);
  const forgotPassword = context.forgotPassword;
  const pageLoading = context.pageLoading;
  const isDark = context.isDark;
  return (
    <div className={`login ${isDark ? "login-dark" : "login-light"}`}>
      {isDark ? (
        <Link to="/">
          <img
            className="login__logo-dark"
            alt="#"
            src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
          />
        </Link>
      ) : (
        <Link to="/">
          <img
            className="login__logo-light"
            alt="#"
            src="https://help.pacisoft.com/wp-content/uploads/2017/11/amazon-logo-preview.png"
          />
        </Link>
      )}

      <div
        className={`login__container ${
          isDark ? "login__container-dark" : "login__container-light"
        }`}
      >
        <div className="login__containertop">
          <h2>{t("Reset Password ")}</h2>
          <form className="login__form">
            <h5>Email</h5>
            <input
              className="login__input"
              placeholder="test@gmail.com"
              type="email"
              value={context.email}
              onChange={(e) => context.setEmail(e.target.value)}
            />
            <p className="login__errorMsg">{context.forgotErrorMsg}</p>
            <p className="succed__Msg">{context.succedEmailSent}</p>

            <p className="login__button">
              <button onClick={forgotPassword}>
                {pageLoading ? <CircleLoading /> : "Reset Password"}
              </button>
              <button>
                <Link
                  to="/login"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Back to login
                </Link>
              </button>
            </p>

            <p className="login__text">
              {t("By continuing, you agree to Amazons")}
            </p>
            <p className="login__help">
              <ArrowRightIcon /> {t("Need help ?")}
            </p>
          </form>
        </div>

        <div
          className={`login__newtoamazone ${
            isDark ? "login__newtoamazone-dark" : "login__newtoamazone-light"
          }`}
        >
          <h5>{t("New to Amazone ?")}</h5>
        </div>

        <button className="login__buttontwo">
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/CreateAccount"
          >
            {t("Create your Amazon account")}
          </Link>
        </button>

        <ul className="login__ect">
          <li>{t("Conditions of Use")}</li>
          <li>{t("Privacy Notice")}</li>
          <li>Help</li>
        </ul>
        <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
      </div>
    </div>
  );
}

export default ForgotPassword;
