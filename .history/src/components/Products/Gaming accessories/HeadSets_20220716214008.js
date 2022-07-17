import React from "react";
import "../Product.css";

function HeadSets() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => console.log(json));
  return <div>Product</div>;
}

export default HeadSets;
