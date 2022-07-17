import React from "react";
import { DATA } from "../cons.js";
function Product() {
  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify({
      DATA,
    }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
  return <div></div>;
}

export default Product;
