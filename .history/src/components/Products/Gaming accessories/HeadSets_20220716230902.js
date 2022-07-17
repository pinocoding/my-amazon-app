import React from "react";
import { DATA } from "./cons";
import "../Product.css";

function HeadSets() {
  return (
    <div className="headsets">
      <div className="headsets__toolbar"></div>
      <div className="headsets__container">
        <div className="headsets__containeroptions">
          <div className="headsets__optionsleft">
            <div>Climate Pledge Friendly</div>
            <input type="checkbox" className="headsets__optionscheck" />
            <span>
              <a href="">Climate Pledge Friendly</a>
            </span>
            <div className="">Department</div>
            <ul className="">
              <li>PC Accessories</li>
              <li>PC Game Headsets</li>
              <li>PlayStation 4 Headsets</li>
              <li>PlayStation Legacy Systems</li>
              <li>Xbox One Accessories</li>
              <li>PlayStation 5 Headsets</li>
              <li>Nintendo Legacy Systems</li>
              <li>Mac Game Headsets</li>
              <div>
                <ul></ul>
              </div>
            </ul>
          </div>
        </div>
        <div className="headsets__containerresults"></div>
      </div>
    </div>
  );
}

export default HeadSets;
