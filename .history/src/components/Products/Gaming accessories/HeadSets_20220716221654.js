import React from "react";
import { DATA } from "./cons";
import "../Product.css";

function HeadSets() {
  const map = DATA.map((item, index) => {
    console.log(item.id);
  });

  return <div></div>;
}

export default HeadSets;
