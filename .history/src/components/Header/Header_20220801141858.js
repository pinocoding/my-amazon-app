import React, { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoutIcon from "@mui/icons-material/Logout";
import FaceIcon from "@mui/icons-material/Face";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";
import { AuthContext } from "../DataLayer/Datalayer";

import "./Header.css";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [active, setActive] = useState(false);
  const context = useContext(AuthContext);
  const currentUser = context.currentUser;
  const handleLogOut = context.handleLogOut;
  const totalQty = context.totalQty;

  const userCartProduct = context.userCartProduct;

  const handlemouseover = () => {
    setIsActive(true);
  };

  const handlemouseout = () => {
    setIsActive(false);
  };

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
        <div className="header__option header__address">
          <span className="header__addressIcon">
            <LocationOnIcon />
          </span>

          <div className="header__addressLine">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Select your address</span>
          </div>
        </div>
        <div className="header__search">
          <div className="header__searchOption">
            All
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
            <div className="header__optionLineTwo header__optionLanguages">
              <img
                className="header__optionLanguagesimg "
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/1920px-Flag_of_the_United_States_%28Pantone%29.svg.png"
                alt="#"
              />
              <ArrowDropDownIcon className="header__optionLineTwoDropDownIcon" />
            </div>
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
                    Hello &nbsp;
                    <span>{currentUser ? currentUser : "guest"}</span>
                  </span>
                </div>

                <div className="header__optionLineTwo">
                  <p>Account & Lists</p>
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
                      {currentUser ? "Sign Out" : "Sign In"}
                    </button>
                  </Link>
                  {currentUser ? (
                    ""
                  ) : (
                    <p>
                      New Costomer?
                      <Link to="/CreateAccount">
                        <span
                          onMouseOver={handlemouseover}
                          onMouseLeave={handlemouseout}
                        >
                          Start Here
                        </span>
                      </Link>
                    </p>
                  )}
                </div>
              </div>
              <div className="Header__dropdownbottom">
                <div className="Header__dropdownLeft">
                  <div className="Header__dropdowncontentLeft">
                    <p>Your List</p>
                    <ul>
                      <Link
                        style={{ color: "black", textDecoration: "none" }}
                        to={currentUser ? "/checkout" : "/login"}
                      >
                        <li>Your Lists</li>
                      </Link>

                      <li>Create a List</li>
                      <li>Find a List or Registry</li>
                      <li>AmazonSmile Charity Lists</li>
                    </ul>
                  </div>
                </div>
                <div className="Header__dropdownRight">
                  <div className="Header__dropdowncontentRight">
                    <p>Your Account</p>
                    <ul>
                      <li>Your Account</li>
                      <li>Account</li>
                      <li>Orders</li>
                      <li>Recommendations</li>
                      <li>Browsing History</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">& Orders</span>
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

      <div className="header__navResponsive">
        <div className="header__navResponsiveTop">
          <div>
            <MenuIcon
              className="header__menu"
              onClick={() => setIsActive(true)}
            />
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
                    <span>Sign-In</span>
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
              All
              <ArrowDropDownIcon className="header__searchOptionIcon" />
            </div>
            <input type="text" className="header__searchInput" />

            <SearchIcon className="header__searchIcon" />
          </div>
        </div>
        <div
          className={
            isActive ? "header__navDropDownActive" : "header__navDropDown"
          }
        >
          <div className="header__navDropDownActiveContainer">
            <div className="header__navDropDownActiveUserName">
              {currentUser ? (
                <div>Hello {currentUser}</div>
              ) : (
                <Link
                  to="/login"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <div>Sign-In</div>
                </Link>
              )}
            </div>
            <ul className="header__navDropDownList">
              <li>Headsets</li>
              <li>text</li>
              <li>text</li>
              <li onClick={() => setActive(true)}>
                Setting <SettingsIcon />
              </li>
              {currentUser ? (
                <li
                  className="header__navDropDownListLogOut"
                  onClick={handleLogOut}
                >
                  log out <LogoutIcon />
                </li>
              ) : (
                ""
              )}
              <ul
                className={
                  active
                    ? "header__navDropDownListSecond"
                    : "header__navDropDown"
                }
              >
                <li>Dark mode</li>
                <li>Dark mode</li>
                <li>Dark mode</li>
                <li>Dark mode</li>
              </ul>
            </ul>
            <CloseIcon
              onClick={() => setIsActive(false)}
              className="header__closeIcon"
            />
            <CloseIcon
              onClick={() => setIsActive(false)}
              className="header__closeIcon"
            />
            <ArrowBackIcon
              onClick={() => setActive(false)}
              className={active ? "header__backIcon" : "header__navDropDown"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
