import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { DATA } from "./cons";
import "../Product.css";

function HeadSets() {
  return (
    <div className="headsets">
      <div className="headsets__toolbar"></div>
      <div className="headsets__container">
        <div className="headsets__containeroptions">
          <div className="headsets__optionsleft">
            <h4 className="">Climate Pledge Friendly</h4>
            <input type="checkbox" className="headsets__optionscheck" />
            <span>
              <a href="">Climate Pledge Friendly</a>
            </span>
            <h4 className="">Department</h4>
            <ul className="">
              <li>PC Accessories</li>
              <li>PC Game Headsets</li>
              <li>PlayStation 4 Headsets</li>
              <li>PlayStation Legacy Systems</li>
              <li>Xbox One Accessories</li>
              <li>PlayStation 5 Headsets</li>
              <li>Nintendo Legacy Systems</li>
              <li>Mac Game Headsets</li>
            </ul>
            <ul>
              <li>Video Games</li>
              <li>Electronics</li>
              <li>Cell Phones & Accessories</li>
              <li>Home & Kitchen</li>
              <li>Musical Instruments</li>
            </ul>
            <p>
              <KeyboardArrowUpIcon />
              <span>See Fewer Departments</span>
            </p>
          </div>
        </div>
        <div className="headsets__containerresults"></div>
      </div>
    </div>
  );
}

export default HeadSets;
