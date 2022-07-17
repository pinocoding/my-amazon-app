import React from "react";
import "./Card.css";

function Product({ title, image, price, BtnContent }) {
  return (
    <div className="cardone">
      <div className="cardone__info">
        <h1 className="cardone__title">{title}</h1>
      </div>
      <div className="cardone__img"></div>
      <img className="cardone__img" src={image} alt="#" />
      <a>{BtnContent}</a>
    </div>
  );
}

export default Product;
