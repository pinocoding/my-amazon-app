import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { userInputs } from "../FormSource/FormSource";
import { Link } from "react-router-dom";
import { DataContext } from "../DataLayer/Datalayer";

import "../AuthForm/AuthStyle.css";
import CircleLoading from "../LoaingPage/CircleLoading";

function UpdateProfile() {
  const { t } = useTranslation(["common"]);
  const context = useContext(DataContext);
  const pageLoading = context.pageLoading;
  const handleUpdate = context.handleUpdate;
  const handleInputChange = context.handleInputChange;
  const currentUser = context.currentUser;
  const handleUpdateProfile = context.handleUpdateProfile;
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
          <h1>{t("UpdateProfile ")}</h1>
          <form className="login__form">
            <h5>{t("Name")}</h5>
            <input
              className="login__input"
              type="text"
              value={context.fullName}
              onChange={(e) => context.setFullName(e.target.value)}
            />
            <h5>{t("Email")}</h5>
            <input
              className="login__input"
              type="text"
              value={context.email}
              onChange={(e) => context.setEmail(e.target.value)}
            />

            <h5>{t("Password")}</h5>
            <input
              className="login__input"
              type="password"
              value={context.password}
              onChange={(e) => context.setPassword(e.target.value)}
            />

            <h5> {t("Password confirmation")}</h5>
            <input
              className="login__input"
              type="password"
              value={context.rePassword}
              onChange={(e) => context.setRePassword(e.target.value)}
            />
            {userInputs.map((userInput) => {
              return (
                <div key={userInput.id}>
                  <label>{userInput.label}</label>
                  <input
                    className="login__input"
                    id={userInput.id}
                    type={userInput.type}
                    placeholder={userInput.placeholder}
                    onChange={handleInputChange}
                  />
                </div>
              );
            })}

            <p className="login__errorMsg">{context.errorMsg}</p>
            <p className="login__Msg">{context.messsage} </p>
            <p className="login__button">
              <button onClick={handleUpdate}>
                {pageLoading ? <CircleLoading /> : t("UpdateProfile")}
              </button>
            </p>
          </form>
        </div>

        <ul className="login__ect">
          <li>Condition of Use</li>
          <li>Privacy Notice</li>
          <li>Help</li>
        </ul>
        <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
      </div>
    </div>
  );
}

export default UpdateProfile;
