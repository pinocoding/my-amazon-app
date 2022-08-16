import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const { t } = useTranslation(["common"]);
  return (
    <div className="header__search">
      <div className="header__searchOption">
        <span> {t("All")}</span>

        <ArrowDropDownIcon className="header__searchOptionIcon" />
      </div>
      <input type="text" className="header__searchInput" />

      <SearchIcon className="header__searchIcon" />
    </div>
  );
}

export default SearchBar;
