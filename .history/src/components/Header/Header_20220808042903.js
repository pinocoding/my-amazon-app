import React, { useContext, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoutIcon from "@mui/icons-material/Logout";
import FaceIcon from "@mui/icons-material/Face";
import Switch from "@mui/material/Switch";

import SettingsIcon from "@mui/icons-material/Settings";
import { DataContext } from "../DataLayer/Datalayer";

import "./Header.css";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [active, setActive] = useState(false);
  const context = useContext(DataContext);
  const isDark = context.isDark;
  const setIsDark = context.setIsDark;
  const currentUser = context.currentUser;
  const handleLogOut = context.handleLogOut;
  const totalQty = context.totalQty;
  const userCartProduct = context.userCartProduct;

  const { i18n, t } = useTranslation(["common"]);
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  //
  const ref = useRef();
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

  const handlemouseover = () => {
    setIsActive(true);
  };

  const handlemouseout = () => {
    setIsActive(false);
  };

  const [checked, setChecked] = useState(localStorage.getItem("switch"));
  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme-color");
    const currentCheckStatus = localStorage.getItem("switch");

    if (currentThemeColor === "theme-dark" && currentCheckStatus === "true") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);
  const handleChange = (e) => {
    setChecked(e.target.checked);
    if (isDark) {
      localStorage.setItem("theme-color", "theme-light");
      localStorage.setItem("switch", "false");

      setIsDark(false);

      // setChecked(false);
    } else {
      localStorage.setItem("theme-color", "theme-dark");
      localStorage.setItem("switch", "true");

      setIsDark(true);
    }
  };

  console.log(checked);
  return (
    <div>
      <div className="header ">
        <div
          className={isActive ? "Header__Overlay" : "Header__NoneOverlay"}
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
            {/*  */}
            <span className="header__optionLineOne">{t("Hello")}</span>
            <span className="header__optionLineTwo">
              {t("Select your address")}
            </span>
            {/*  */}
          </div>
        </div>
        <div className="header__search">
          <div className="header__searchOption">
            <span> {t("All")}</span>

            <ArrowDropDownIcon className="header__searchOptionIcon" />
          </div>
          <input type="text" className="header__searchInput" />

          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <div
            className="header__option  "
            onMouseOver={handlemouseover}
            onMouseLeave={handlemouseout}
          >
            <select
              className="header__optionLineTwo header__optionLanguages"
              value={localStorage.getItem("i18nextLng")}
              onChange={handleLanguageChange}
            >
              <option value="en">En</option>
              <option value="ja">日本</option>
              <option value="vie">Vie</option>
            </select>
          </div>
          <div className="header__option header__optionDropDown">
            <Link
              to="/login"
              onMouseOver={handlemouseover}
              onMouseLeave={handlemouseout}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="Header__optionLine">
                <div className="header__optionLineOne">
                  <span>
                    {t("Hello")} &nbsp;
                    <span>{currentUser ? currentUser : t("Sign-In")}</span>
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
            <div
              className="Header__dropdowncontent"
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
                      <Link to="/CreateAccount">
                        <span
                          onMouseOver={handlemouseover}
                          onMouseLeave={handlemouseout}
                        >
                          {t("Start Here")}
                        </span>
                      </Link>
                    </p>
                  )}
                </div>
              </div>
              <div className="Header__dropdownbottom">
                <div className="Header__dropdownLeft">
                  <div className="Header__dropdowncontentLeft">
                    <p> {t("Your List")}</p>
                    <ul>
                      <Link
                        style={{ color: "black", textDecoration: "none" }}
                        to={currentUser ? "/checkout" : "/login"}
                      >
                        <li>{t("Your List")}</li>
                      </Link>
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
            {/*  */}
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
          </div>
          <div className="header__navResLeft">
            <div className="header__sign">
              {currentUser ? (
                <div>
                  <span className="header__userName">Hello {currentUser}</span>
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
          <div className="header__search">
            <div className="header__searchOption">
              <span>{t("All")}</span>

              <ArrowDropDownIcon className="header__searchOptionIcon" />
            </div>
            <input type="text" className="header__searchInput" />

            <SearchIcon className="header__searchIcon" />
          </div>
        </div>
        <div className={isActive ? "header__navDropDownActive" : "header"}>
          <div ref={ref} className="header__navDropDownActiveContainer">
            <div className="header__navDropDownActiveUser">
              {currentUser ? (
                <span>Hello {currentUser}</span>
              ) : (
                <span>{t("Sign-In")}</span>
              )}
            </div>
            <div className="header__navDropDownActiveList">
              <ul>
                <li>text</li>
                <li onClick={() => setActive((oldState) => !oldState)}>
                  Setting <SettingsIcon />
                </li>
                {active && (
                  <ul className="header__navDropDownActiveListTwo">
                    <li>
                      Dark theme
                      <Switch checked={checked} onChange={handleChange} />
                    </li>
                    <li>Language</li>
                  </ul>
                )}
              </ul>

              {currentUser && (
                <li onClick={handleLogOut}>
                  Logout <LogoutIcon />
                </li>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* ----------NAVesSponsive-------- */}
    </div>
  );
}

export default Header;
