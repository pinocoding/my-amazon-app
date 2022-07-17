import React from "react";

function Product() {
  fetch()
    .then((response) => response.json())
    .then((data) => console.log(data));
  return <div></div>;
}

export default Product;
