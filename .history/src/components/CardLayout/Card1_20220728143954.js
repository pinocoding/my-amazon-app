import React from "react";
import "./Card.css";

function Product({ title, image, BtnContent, link1, gamingacces }) {
  return (
    <div className="cardone">
      <div className="cardone__info">
        <h1 className="cardone__title">{title}</h1>
      </div>
      <div className="cardone__img"></div>
      <a href={link1}>
        <img className="cardone__img" src={image} alt="#" />
      </a>

      <a href={gamingacces}>
        <a>{BtnContent}</a>
      </a>
    </div>
  );
}

export default Product;
