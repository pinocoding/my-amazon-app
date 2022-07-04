import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean starup</p>
        <p className="product__price"></p>
        <small>$</small>
        <strong>19.99</strong>
      </div>
    </div>
  );
}

export default Product;
