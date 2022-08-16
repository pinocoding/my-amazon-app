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
  const [value, setValue] = useState("");

  const [search, setSearch] = useState([]);

  const handleSearch = (text) => {
    let matches = searchData.filter((data) => {
      const regex = new RegExp(`${text}`, "gi");
      return data.name.match(regex);
    });
    setSearch(matches);
  };
  const handleClick = (suggestion) => {
    setValue(suggestion);
    setShowSuggestion(false);
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
        value={value}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <SearchIcon className="header__searchIcon" />
      {search && (
        <ul className="header__searchResult">
          {search.map((suggestion, index) => {
            return (
              <li key={index} onClick={() => handleClick(suggestion)}>
                <Link to={suggestion.link}></Link>
                {suggestion.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
