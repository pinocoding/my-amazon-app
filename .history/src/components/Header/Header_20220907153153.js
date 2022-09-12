import React, { useContext, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { MaterialUISwitch } from "../Toggle/Toggle";
import { scrollToTop } from "../Backtotop/Backtotop";
import { DataContext } from "../DataLayer/Datalayer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import FaceIcon from "@mui/icons-material/Face";
import SearchBar from "../SearchBar/SearchBar";

import "./Header.css";
import Languages from "../Languages/Languages";

function Header() {
  const ref = useRef();
  const [textActive, setTextActive] = useState(false);
  const [show, setShow] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [active, setActive] = useState(false);
  const [subActive, setSubActive] = useState(false);
  const context = useContext(DataContext);
  const checked = context.checked;
  const isDark = context.isDark;
  const currentUser = context.currentUser;
  const currentUserName = context.currentUserName;
  const handleLogOut = context.handleLogOut;
  const totalQty = context.totalQty;
  const userCartProduct = context.userCartProduct;
  const handleChange = context.handleChange;
  const admin = context.admin;

  const { t } = useTranslation(["common"]);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isActive && ref.current && !ref.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isActive]);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (active && ref.current && !ref.current.contains(e.target)) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [active]);

  const handlemouseover = async () => {
    setIsActive(true);
    setShow(true);
  };

  const handlemouseout = () => {
    setIsActive(false);
  };
  const styleLi = {
    fontSize: "14px",
    paddingLeft: "20px",
  };

  return (
    <div>
      <div className="header ">
        <div className="toggle-darkmode">
          <MaterialUISwitch checked={!!checked} onChange={handleChange} />
        </div>
        <div
          className={
            isActive || textActive ? "header-overlay" : "header-noneoverlay"
          }
        ></div>

        <Link to="/">
          <img
            className="header__logo"
            src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
            alt=""
          />
        </Link>
        <div className="header__address">
          <span className="header__addressIcon">
            <LocationOnIcon />
          </span>

          <div className="header__addressLine">
            <span className="header__optionLineOne">{t("Hello")}</span>
            <span className="header__optionLineTwo">
              {t("Select your address")}
            </span>
          </div>
        </div>

        <SearchBar setTextActive={setTextActive} />

        <div className="header__nav">
          <div
            className="header__option"
            onMouseOver={handlemouseover}
            onMouseLeave={handlemouseout}
          >
            {/*  */}
            <div className="header__optionLineTwo">
              <Languages />
            </div>

            {/*  */}
          </div>
          <div className="header__option header__optionDropDown">
            <Link
              to={currentUser ? "/updateProfile" : "/login"}
              onMouseOver={handlemouseover}
              onMouseLeave={handlemouseout}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="Header__optionLine">
                <div className="header__optionLineOne">
                  <span>
                    {t("Hello")} &nbsp;
                    <span>{currentUser ? currentUserName : t("Sign-In")}</span>
                  </span>
                </div>

                <div className="header__optionLineTwo">
                  <p> {t("Account & Lists")}</p>
                  <div>
                    <ArrowDropDownIcon className="header__optionLineTwoDropDownIcon" />
                  </div>
                </div>
              </div>
            </Link>
            {show && (
              <div
                className={`Header__dropdowncontent ${
                  isDark
                    ? "Header__dropdowncontent-dark"
                    : "Header__dropdowncontent-light"
                }`}
                onMouseOver={handlemouseover}
                onMouseLeave={handlemouseout}
              >
                <div className="Header__dropdowntop">
                  <div className="Header__dropdowntopcontent ">
                    <Link to={!currentUser && "/login"}>
                      <button
                        className="Header__dropdownbtn"
                        onClick={handleLogOut}
                      >
                        {currentUser ? t("Sign Out") : t("Sign-In")}
                      </button>
                    </Link>

                    {currentUser ? (
                      ""
                    ) : (
                      <p>
                        {t("New Customer?")}
                        <Link to="/createaccount">
                          <span
                            onMouseOver={handlemouseover}
                            onMouseLeave={handlemouseout}
                          >
                            &nbsp; {t("Start Here")}
                          </span>
                        </Link>
                      </p>
                    )}
                  </div>
                </div>
                <div className="Header__dropdownbottom">
                  <div className="Header__dropdownLeft">
                    d
                    <div className="Header__dropdowncontentLeft">
                      <p> {t("Your List")}</p>
                      <ul>
                        <Link
                          style={{ color: "black", textDecoration: "none" }}
                          to={currentUser ? "/checkout" : "/login"}
                        >
                          <li>{t("Your List")}</li>
                        </Link>
                        {admin && (
                          <Link
                            style={{ color: "black", textDecoration: "none" }}
                            to="/admin"
                          >
                            <li>{t("Admin")}</li>
                          </Link>
                        )}
                      </ul>
                    </div>
                  </div>
                  <div className="Header__dropdownRight">
                    <div className="Header__dropdowncontentRight">
                      <p>{t("Your Account")}</p>
                      <ul>
                        <li>{t("Account")}</li>

                        <li>{t("Orders")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="header__option">
            <span className="header__optionLineOne">{t("Return")}</span>
            <span className="header__optionLineTwo">{t("& Orders")}</span>
          </div>
        </div>
        <Link to="/checkout">
          {currentUser && userCartProduct.length > 0 ? (
            <div
              style={{ color: "orange", fontWeight: "600" }}
              className="header__optionBasket"
              onClick={scrollToTop}
            >
              <ShoppingCartIcon />
              <span className="header__optionLineTwo header__basketCount">
                <span>{totalQty}</span>
              </span>
            </div>
          ) : (
            <div className="header__optionBasket">
              <ShoppingCartIcon />
              <span className="header__optionLineTwo header__basketCount">
                <span>0</span>
              </span>
            </div>
          )}
        </Link>
      </div>
      {/* ----------NAVesSponsive-------- */}
      <div className="header__navResponsive">
        <div className="header__navResponsiveTop">
          <div>
            <p>
              <MenuIcon
                className="header__menu"
                onClick={() => setIsActive((oldState) => !oldState)}
              />
            </p>

            <Link to="/">
              <img
                className="header__logo"
                src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
                alt=""
              />
            </Link>
            <div className="header__navResponsiveTopLang">
              {localStorage.getItem("i18nextLng")}
            </div>
          </div>
          <div className="header__navResLeft">
            <div className="header__sign">
              {currentUser ? (
                <div>
                  <span className="header__userName">
                    {t("Hello")} {currentUserName}
                  </span>
                </div>
              ) : (
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/login"
                >
                  <div>
                    <span>{t("Sign-In")}</span>
                    <FaceIcon className="header__signIcon" />
                  </div>
                </Link>
              )}
            </div>

            <Link to="/checkout">
              {currentUser && userCartProduct.length > 0 ? (
                <div
                  style={{ color: "orange", fontWeight: "600" }}
                  className=""
                >
                  <ShoppingCartIcon className="header__BasketIcon" />
                  <span className="header__optionLineTwo header__basketCount">
                    <span>{totalQty}</span>
                  </span>
                </div>
              ) : (
                <div className="header__optionBasket">
                  <ShoppingCartIcon className="header__BasketIcon" />
                  <span className="header__optionLineTwo header__basketCount">
                    <span>0</span>
                  </span>
                </div>
              )}
            </Link>
          </div>
        </div>

        <div className="header__navResponsiveBottom">
          <SearchBar setTextActive={setTextActive} />
        </div>
        <div className={isActive ? "header__navDropDownActive" : "header"}>
          <div
            ref={ref}
            className={`header__navDropDownActiveContainer ${
              isDark ? "header__navDropDown-dark" : "header__navDropDown-light"
            }`}
          >
            <div className="header__navDropDownActiveUser">
              {currentUser ? (
                <span>
                  <Link to="/updateprofile">
                    {t("Hello")} {currentUserName}
                  </Link>
                </span>
              ) : (
                <span>{t("Sign-In")}</span>
              )}
            </div>
            <div className="header__navDropDownActiveList">
              <ul>
                {admin && (
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    onClick={scrollToTop}
                  >
                    <Link to="/admin"> Admin</Link>

                    <AdminPanelSettingsIcon />
                  </li>
                )}

                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  onClick={scrollToTop}
                >
                  {t("HomePage")}
                  <HomeIcon />
                </li>

                <li onClick={() => setSubActive((oldState) => !oldState)}>
                  {t("Trending")}
                  {subActive ? (
                    <KeyboardArrowDownIcon />
                  ) : (
                    <KeyboardArrowLeftIcon />
                  )}
                </li>
                {subActive && (
                  <ul className="header__navDropDownActiveListTwo">
                    <li style={styleLi}>
                      <a href="#Topseller-section">
                        {t("Top Sellers Of The Day")}
                      </a>
                    </li>
                    <li style={styleLi}>
                      <a href="#Kindle-section">{t("Kindle E readers")}</a>
                    </li>

                    <li style={styleLi}>
                      <a href="#Shoppet-section">{t("Shop Pet supplies")}</a>
                    </li>
                    <li style={styleLi}>
                      <a href="#Watches-section">{t("Top Smart Watches")}</a>
                    </li>

                    <li style={styleLi}>
                      <a href="#Books-section">{t("Top Books")}</a>
                    </li>
                  </ul>
                )}
                <li onClick={() => setActive((oldState) => !oldState)}>
                  <p>{t("Settings")}</p>
                  {active ? (
                    <KeyboardArrowDownIcon />
                  ) : (
                    <KeyboardArrowLeftIcon />
                  )}
                </li>
                {active && (
                  <ul className="header__navDropDownActiveListTwo">
                    <li style={styleLi}>
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Grid item>{t("Dark theme")}</Grid>
                        <Grid item>
                          <MaterialUISwitch
                            checked={!!checked}
                            onChange={handleChange}
                          />
                        </Grid>
                      </Grid>
                    </li>

                    <li style={styleLi}>
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Grid item>{t("Language")}</Grid>
                        <Grid item>
                          <div style={{ width: "90px" }}>
                            <Languages />
                          </div>
                        </Grid>
                      </Grid>
                    </li>
                  </ul>
                )}
              </ul>

              {currentUser && (
                <li onClick={handleLogOut}>
                  {t("Logout")} <LogoutIcon />
                </li>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
