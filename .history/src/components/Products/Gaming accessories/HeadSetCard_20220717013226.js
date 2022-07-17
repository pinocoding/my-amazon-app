import React from "react";
import { HeadPhonesDATA } from "../../../fakedata/HeadPhones";

import "../Product.css";

function HeadSetsCard() {
  return (
    <div className="headsetscard">
      <h4>RESULTS</h4>

      {HeadPhonesDATA.map((item) => {
        return (
          <div className="headsetscard__cell">
            <div className="headsetscard__img">
              <img src={item.image} alt="" />
            </div>

            <div className="headsetscard__cell__info">
              <div className="tittle">{item.title}</div>

              <div className="description">{item.description}</div>
              <div className="price">@$@#@$#</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HeadSetsCard;
