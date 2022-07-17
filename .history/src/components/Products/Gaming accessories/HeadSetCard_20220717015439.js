import React from "react";
import { HeadPhonesDATA } from "../../../assets/images/HeadPhones";

import "../Product.css";

function HeadSetsCard() {
  return (
    <div className="headsetscard">
      <h4>RESULTS</h4>

      {HeadPhonesDATA.map((item) => {
        return (

        );
      })}
    </div>
  );
}

export default HeadSetsCard;
