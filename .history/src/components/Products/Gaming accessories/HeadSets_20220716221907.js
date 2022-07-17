import React from "react";
import { DATA } from "./cons";
import "../Product.css";

function HeadSets() {
  DATA.map((item, index) => {
    return item;
  });

  return <div>{console.log(item)}</div>;
}

export default HeadSets;
