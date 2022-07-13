import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../DataLayer/Datalayer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { AuthContext } from "../DataLayer/Datalayer";

import "./Header.css";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const context = useContext(AuthContext);
  const handleSignout = context.handleLogout();

  const isActive = context.isActive;
  const setIsActive = context.setIsActive;

  const handleMouseOver = () => {
    setIsActive(true);
  };

  const handleMouseOut = (handleSignout) => {
    setIsActive(false);
    if (user) {
      handleSignout;
    }
  };
  // onClick={handleMouseOut}

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
            <span className="header__optionLineOne">Hello</span>
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
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseOut}
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
          <div
            className="header__option header__optionDropDown"
            onMouseOver={handleMouseOver}
          >
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="Header__optionLine">
                <div className="header__optionLineOne">
                  <span>
                    Hello &nbsp;<span>{context.name}</span>
                  </span>
                </div>

                <div className="header__optionLineTwo">
                  <span>Account & Lists</span>

                  <ArrowDropDownIcon className="header__optionLineTwoDropDownIcon" />
                </div>
              </div>
            </Link>
            <div
              className="Header__dropdowncontent"
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseOut}
            >
              <div className="Header__dropdowntop">
                <div className="Header__dropdowntopcontent ">
                  <Link to={!user && "/login"}>
                    <button
                      className="Header__dropdownbtn"
                      onClick={handleMouseOut}
                    >
                      {user ? "Sign Out" : "Sign In"}
                    </button>
                  </Link>
                  <p>
                    New Costomer? <a href="">Start Here</a>
                  </p>
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
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon className="header__optionBasket" />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
