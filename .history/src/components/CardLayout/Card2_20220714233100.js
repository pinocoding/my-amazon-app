import React from "react";
import "./Card.css";

function Product({ id, title, image, price, BtnContent }) {
  return (
    <div className="cardtwo">
      <div className="cardtwo__info">
        <h1 className="cardtwo__title">{title}</h1>
      </div>
      <div className="cardtwo__uibody">
        <img className="cardtwo__img" src={image} alt="#" />
      </div>

      <a>{BtnContent}</a>
    </div>
  );
}

export default Product;
