import React from "react";
import { DATA } from "./cons";
import "../Product.css";

function HeadSets() {
  return (
    <div className="headsets">
      <div className="headsets__toolbar"></div>
      <div className="headsets__container">
        <div className="headsets__containeroptions">
          <div className="headsets__optionsleft">Climate Pledge Friendly</div>
          <input type="checkbox" className="headsets__optionscheck" />
          <span>
            <a href="">Climate Pledge Friendly</a>
          </span>
          <ul className="headsets__optionsleftlist">
            <li></li>
          </ul>
        </div>
        <div className="headsets__containerresults"></div>
      </div>
    </div>
  );
}

export default HeadSets;
