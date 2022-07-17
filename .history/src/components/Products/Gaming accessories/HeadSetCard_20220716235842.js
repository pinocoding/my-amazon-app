import React from "react";
import { DATA } from ".././cons";

import "../Product.css";

function HeadSetsCard() {
  // DATA.map((item, index) => {
  //   console.log(item.image);
  return (
    <div className="headsetscard">
      <h4>RESULTS</h4>
      <div className="headsetscard__cell">
        <img
          src="https://cdn.tgdd.vn/Products/Images/7923/247327/balo-laptop-156-inch-rivacase-5560-xanh-duong-ava-600x600.jpg"
          alt=""
        />
        <div className="headsetscard__cell__info">
          <div className="tittle">aaaaa</div>
          <div className="description"></div>
          <div className="price"></div>
        </div>
      </div>
    </div>
  );
  // });
}

export default HeadSetsCard;
