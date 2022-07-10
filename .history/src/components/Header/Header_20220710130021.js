import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../DataLayer/Datalayer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Header.css";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div>
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
            alt=""
          />
        </Link>
        <div className=" header__option header__address">
          <  <LocationOnIcon />
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">Select your address</span>
        </div>
        <div className="header__search">
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
          <div className="header__option">
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
            <ShoppingBasketIcon className="header_optionBasket" />
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
