import React from "react";
import ProductCard from "./ProductCard.js";
function HeadSets({ col, id, orderBy }) {
  return (
    <div className="headsets">
      <div className="headsets__toolbar"></div>
      <div className="headsets__container">
        <div className="headsets__containeroptions">
          <div className="headsets__optionsleft"></div>
        </div>
        <div className="headsets__containerright">
          <div className="headsets__row">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadSets;