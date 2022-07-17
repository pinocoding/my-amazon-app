import React from "react";
import { DATA } from "./cons";
import "../Product.css";

function HeadSets() {
  DATA.map((item, index) => {
    return <div>{item.title}</div>;
  });
}

export default HeadSets;
