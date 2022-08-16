import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { DataContext } from "../DataLayer/Datalayer";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

function SearchBar() {
  const context = useContext(DataContext);
  const searchData = context.searchData;

  const [showdata, setShowData] = useState(false);
  const [search, setSearch] = useState([]);

  const handleSearch = (text) => {
    let matches = searchData.filter((data) => {
      const regex = new RegExp(`${text}`, "gi");
      return data.name.match(regex);
    });
    setSearch(matches);
  };

  const { t } = useTranslation(["common"]);
  return (
    <div className="header__search">
      <div className="header__searchOption">
        <span> {t("All")}</span>

        <ArrowDropDownIcon className="header__searchOptionIcon" />
      </div>
      <input
        className="header__searchInput"
        placeholder="Search"
        onFocus={() => setShowData(true)}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <SearchIcon className="header__searchIcon" />
      {showdata && (
        <ul className="header__searchResult">
          {search.map((suggestion, index) => {
            return (
              <li key={index}>
                <Link to={suggestion.link}>{suggestion.name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
