import React from "react";
import { HeadPhonesDATA } from "../../FakeData/HeadPhonesDATA";

import "../Product.css";

function HeadSetsCard() {
  return (
    <div className="headsetscard">
      <h4>RESULTS</h4>

      {HeadPhonesDATA.map((item) => {
        return <div className="headsetscard__cell"></div>;
      })}
    </div>
  );
}

export default HeadSetsCard;
