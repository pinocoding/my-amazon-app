import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
      <img
        src="https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/188/K.jpg"
        alt=""
      />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
