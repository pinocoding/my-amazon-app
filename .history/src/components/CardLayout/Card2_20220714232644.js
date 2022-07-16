import React from "react";
import "./Card.css";

function Product({ id, title, image, price, BtnContent }) {
  return (
    <div className="cardone">
      <div className="cardone__info">
        <h1 className="cardone__title">{title}</h1>
      </div>
      <img className="cardone__img" src={image} alt="#" />
      <a>{BtnContent}</a>
    </div>
  );
}

export default Product;
