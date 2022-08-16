import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

function SearchBar({ data = ["tiendat", "book", "porn"] }) {
  const [value, setValue] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const suggestions = data.filter((item) =>
    item.toLowerCase().includes(value.toLowerCase())
  );
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const { t } = useTranslation(["common"]);
  return (
    <div className="header__search">
      <div className="header__searchOption">
        <span> {t("All")}</span>

        <ArrowDropDownIcon className="header__searchOptionIcon" />
      </div>
      <input
        placeholder="Search"
        value={value}
        className="header__searchInput"
        onFocus={() => setShowSuggestion(true)}
        onChange={handleChange}
      />

      <SearchIcon className="header__searchIcon" />
      {showSuggestion && (
        <ul className="header__searchResult">
          {suggestions.map((suggestion) => {
            return <li key={suggestion}></li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
