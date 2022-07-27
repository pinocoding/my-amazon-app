import React from "react";
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
  link1,
  link2,
  link3,
  link4,
  gamingaccess,
}) {
  return (
    <div className="cardtwo">
      <div className="cardtwo__info">
        <h1 className="cardtwo__title">{title}</h1>
      </div>
      <div className="cardtwo__uibody">
        <div className="cardtwo__uibody__cell">
          <a href={link1}>
            <img className="cardtwo__img" src={image1} alt="#" />
          </a>
          <p>{nameimg1}</p>
          <p>{nameimg12}</p>
        </div>
        <div className="cardtwo__uibody__cell">
          <a href={link2}>
            <img className="cardtwo__img" src={image2} alt="#" />
          </a>
          <p>{nameimg2}</p>
        </div>
        <div className="cardtwo__uibody__cell">
          <a href={link3}>
            <img className="cardtwo__img" src={image3} alt="#" />
          </a>
          <p>{nameimg3}</p>
        </div>
        <div className="cardtwo__uibody__cell">
          <a href={link4}>
            <img className="cardtwo__img" src={image4} alt="#" />
          </a>
          <p>{nameimg4}</p>
        </div>
      </div>

      <a href={gamingaccess}>{BtnContent}</a>
    </div>
  );
}

export default Product;
