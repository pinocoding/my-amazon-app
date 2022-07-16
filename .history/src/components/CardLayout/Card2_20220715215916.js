import React from "react";
import "./Card.css";

function Product({ title, image1, image2, image3, image4, BtnContent }) {
  return (
    <div className="cardtwo">
      <div className="cardtwo__info">
        <h1 className="cardtwo__title">{title}</h1>
      </div>
      <div className="cardtwo__uibody">
        <div className="cardtwo__uibody__cell">
          <img className="cardtwo__img" src={image1} alt="#" />
          <p>{}</p>
        </div>
        <div className="cardtwo__uibody__cell">
          <img className="cardtwo__img" src={image2} alt="#" />
          <p>{}</p>
        </div>
        <div className="cardtwo__uibody__cell">
          <img className="cardtwo__img" src={image3} alt="#" />
          <p>{}</p>
        </div>
        <div className="cardtwo__uibody__cell">
          <img className="cardtwo__img" src={image4} alt="#" />
          <p>{}</p>
        </div>
      </div>

      <a href="#">{BtnContent}</a>
    </div>
  );
}

export default Product;
