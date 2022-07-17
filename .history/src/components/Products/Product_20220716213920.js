import React from "react";
import { DATA } from "../cons.js";
function Product() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => console.log(json));
  return <div></div>;
}

export default Product;
