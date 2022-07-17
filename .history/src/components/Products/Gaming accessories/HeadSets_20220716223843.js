import React from "react";
import { DATA } from "./cons";
import "../Product.css";

function HeadSets() {
  DATA.map((item, index) => {
    return (
      <div className="headsets">
        <div className="headsets__container"></div>
      </div>
    );
  });
}

export default HeadSets;
