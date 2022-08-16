import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const [value, setValue] = useState("");
  const [showSugges, setShowSugges] = useState(false);
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
        type="text"
        placeholder="Search"
        value={value}
        className="header__searchInput"
        onChange={handleChange}
      />

      <SearchIcon className="header__searchIcon" />
      {showSugges && <div></div>}
    </div>
  );
}

export default SearchBar;
