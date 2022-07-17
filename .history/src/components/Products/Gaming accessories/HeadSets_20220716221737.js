import React from "react";
import { DATA } from "./cons";
import "../Product.css";

function HeadSets() {
  const map = DATA.map((item, index) => {
    console.log(item.title);
  });

  return <div></div>;
}

export default HeadSets;
