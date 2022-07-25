import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { AuthContext } from "../DataLayer/Datalayer";

import "./Header.css";

function Header() {
  const context = useContext(AuthContext);
  const currentUser = context.currentUser;
  const handleLogOut = context.handleLogOut;
  const isActive = context.isActive;
  const setIsActive = context.setIsActive;

  const handlemouseover = () => {
    setIsActive(true);
  };

  const handlemouseout = () => {
    setIsActive(false);
  };
  return (
    <div>
      <div className="header">
        <div className={isActive ? "Header__Overlay" : null}></div>

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
            <ArrowDropDownIcon />
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
                        <span>Start Here</span>
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
                      <li>Your Lists</li>
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
                      <li>Watchlist</li>
                      <li>Video Purchases & Rentals</li>
                      <li>Kindle Unlimited</li>
                      <li>Content & Devices</li>
                      <li>Subscribe & Save Items</li>
                      <li>Memberships & Subscriptions</li>
                      <li>Music Library</li>
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
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </div>

          <div className="header__optionBasket">
            <ShoppingCartIcon className="header__optionBasket" />
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>

      </div>
    </div>
  );
}

export default Header;
