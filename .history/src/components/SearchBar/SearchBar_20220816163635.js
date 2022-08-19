import React, { useState, useContext, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DataContext } from "../DataLayer/Datalayer";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

function SearchBar() {
  const ref = useRef();
  const context = useContext(DataContext);
  const searchData = context.searchData;
  const [activeShow, setActiveShow] = useState(false);

  const [search, setSearch] = useState([]);

  const { t } = useTranslation(["common"]);
  return (
    <div ref={ref} className="header__search">
      <div className="header__searchOption">
        <span> {t("All")}</span>

        <ArrowDropDownIcon className="header__searchOptionIcon" />
      </div>
      <input
        className="header__searchInput"
        placeholder="Search"
        value={search}
        onFocus={() => setActiveShow(true)}
        onChange={(e) => setSearch(e.target.value)}
      />

      <SearchIcon className="header__searchIcon" />
      {activeShow && (
        <ul className="header__searchResult">
          {searchData.filter({ name }).map((item, index) => {
            return (
              <Link to={item.link}>
                <li key={index}>{item.name}</li>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;