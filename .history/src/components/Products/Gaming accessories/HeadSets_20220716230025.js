import React from "react";
import { DATA } from "./cons";
import "../Product.css";

function HeadSets() {
  return (
    <div className="headsets">
      <div className="headsets__toolbar"></div>
      <div className="headsets__container">
        <div className="headsets__containeroptions">
          <ul className="headsets__optionsleft">
            <li></li>
          </ul>
        </div>
        <div className="headsets__containerresults"></div>
      </div>
    </div>
  );
}

export default HeadSets;
