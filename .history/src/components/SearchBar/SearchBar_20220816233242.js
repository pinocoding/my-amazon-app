import React, {
  useState,
  useContext,
  useRef,
  useEffect,
  useNavigate,
} from "react";
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
  const [search, setSearch] = useState("");
  const { t } = useTranslation(["common"]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (activeShow && ref.current && !ref.current.contains(e.target)) {
        setActiveShow(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [activeShow]);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (activeShow && ref.current && !ref.current.contains(e.target)) {
        setActiveShow(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [activeShow]);
  // const handleEnter = (e) => {
  //   if (e.key === "Enter") {
  //     navigate("/");
  //   }
  // };

  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     navigate("/");
  //   }
  // };

  return (
    <div className="header__search">
      <div className="header__searchOption">
        <span> {t("All")}</span>
        <ArrowDropDownIcon className="header__searchOptionIcon" />
      </div>
      <div></div>
    </div>
  );
}

export default SearchBar;
