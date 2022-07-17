import React from "react";
import { DATA } from ".././cons";

import "../Product.css";

function HeadSetsCard() {
  return (
    <div className="headsetscard">
      <h4>RESULTS</h4>

      <div className="headsetscard__cell">
        {DATA.map((item) => {
          return (
            <div>
              <img src="" alt="" />
              <div className="headsetscard__cell__info">
                <div className="tittle"></div>
                <div className="description"></div>
                <div className="price">@$@#@$#</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeadSetsCard;
