import React, { useState, useContext, useRef, useEffect } from "react";

import { DataContext } from "../DataLayer/Datalayer";
import { Link } from "react-router-dom";

import "./SearchBar.css";

function SearchBar({ setIsActive }) {
  const ref = useRef();
  const context = useContext(DataContext);
  const searchData = context.searchData;
  const [activeShow, setActiveShow] = useState(false);
  const [search, setSearch] = useState("");

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
  const handleKeyPress = (e) => {
    if (e.key === "38") {
      console.log("enter press here! ");
    }
  };
  return (
    <div className="header__search">
      <input
        className="header__searchInput"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onClick={asynce() => await setActiveShow(true) await (setIsActive(true))}
        onKeyPress={(e) => handleKeyPress(e)}
      />
      {activeShow && (
        <ul ref={ref} className="header__searchResult">
          {searchData
            .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
            .map((item, index) => {
              return (
                <Link
                  to={item.link}
                  style={{ textDecoration: "none", color: "black" }}
                >
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
