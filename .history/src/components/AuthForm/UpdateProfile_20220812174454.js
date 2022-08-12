import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../DataLayer/Datalayer";

import "../AuthForm/AuthStyle.css";
import CircleLoading from "../LoaingPage/CircleLoading";

function UpdateProfile() {
  const context = useContext(DataContext);
  const pageLoading = context.pageLoading;
  const handleSignup = context.handleSignup;
  const updateFullName = context.updateFullName;
  const updateEmail = context.updateEmail;
  const updatePassword = context.updatePassword;
  const currentUser = context.currentUser;
  const isDark = context.isDark;
  const promises = [];

  if (context.fullName !== currentUser.fullName) {
    promises.push(updateEmail(context.fullName));

    console.log("Changed");
  }

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
          <h1>Update Profile</h1>
          <form className="login__form">
            <h5>Name </h5>
            <input
              className="login__input"
              type="text"
              value={context.fullName}
              onChange={(e) => context.setFullName(e.target.value)}
            />
            <h5>Mobile number or email</h5>
            <input
              className="login__input"
              type="text"
              value={context.email}
              onChange={(e) => context.setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
              className="login__input"
              type="password"
              value={context.password}
              onChange={(e) => context.setPassword(e.target.value)}
            />

            <h5>Password confirmation</h5>
            <input
              className="login__input"
              type="password"
              value={context.rePassword}
              onChange={(e) => context.setRePassword(e.target.value)}
            />

            <p className="login__errorMsg">{context.errorMsg}</p>
            <p className="login__button">
              <button onClick={handleSignup}>
                {pageLoading ? <CircleLoading /> : "Update Profile"}
              </button>
            </p>

            <p className="login__text">
              By continuing, you agree to Amazon's &nbsp; Conditions of Use
              &nbsp;and &nbsp; Privacy Notice
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
