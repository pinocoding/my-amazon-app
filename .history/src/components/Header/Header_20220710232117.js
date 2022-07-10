import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../DataLayer/Datalayer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { AuthContext } from "../DataLayer/Datalayer";

import "./Header.css";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  const HandleContext = useContext(AuthContext);

  const handleMouseOver = () => {
    const isActive = HandleContext.isActive;
    const setIsActive = HandleContext.setIsActive;
    setIsActive(true);
  };

  const handleMouseOut = () => {
    setIsActive(false);
  };

  return (
    <div>
      <div className="header">
        <div className="Header__Modal">
          <div className="Header__Overlay"></div>
        </div>

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
          <div className="header__option">
            <span className="header__optionLineTwo  header__optionLanguages">
              <img
                className="header__optionLanguagesimg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/1920px-Flag_of_the_United_States_%28Pantone%29.svg.png"
                alt="#"
              />
              <ArrowDropDownIcon className="header__optionLinetTwoDropDownIcon" />
            </span>
          </div>
          <div
            className={
              isActive
                ? "header__option header__optionActive"
                : "header__option"
            }
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="header__SignInModal"></div>
            <span className="header__optionLineOne">Hello, Sign in</span>
            <span className="header__optionLineTwo">
              Account & Lists
              <ArrowDropDownIcon className="header__optionLinetTwoDropDownIcon" />
            </span>
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
