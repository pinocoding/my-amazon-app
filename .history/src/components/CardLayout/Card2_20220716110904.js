import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Product({
  title,
  image1,
  nameimg1,
  nameimg12,
  image2,
  nameimg2,
  image3,
  nameimg3,
  image4,
  nameimg4,
  BtnContent,
}) {
  return (
    <div className="cardtwo">
      <div className="cardtwo__info">
        <h1 className="cardtwo__title">{title}</h1>
      </div>
      <div className="cardtwo__uibody">
        <div className="cardtwo__uibody__cell">
          <img className="cardtwo__img" src={image1} alt="#" />

          <p>{nameimg1}</p>
          <p>{nameimg12}</p>
        </div>
        <div className="cardtwo__uibody__cell">
          <img className="cardtwo__img" src={image2} alt="#" />
          <p>{nameimg2}</p>
        </div>
        <div className="cardtwo__uibody__cell">
          <img className="cardtwo__img" src={image3} alt="#" />
          <p>{nameimg3}</p>
        </div>
        <div className="cardtwo__uibody__cell">
          <img className="cardtwo__img" src={image4} alt="#" />
          <p>{nameimg4}</p>
        </div>
      </div>

      <a href="#">{BtnContent}</a>
    </div>
  );
}

export default Product;
