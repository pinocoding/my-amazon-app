import React from "react";

function Card3(title, image, price, BtnContent) {
  return (
    <div>
      {" "}
      <div className="cardone">
        <div className="cardone__info">
          <h1 className="cardone__title">{title}</h1>
        </div>
        <div className="cardone__img"></div>
        <img className="cardone__img" src={image} alt="#" />
        <a>{BtnContent}</a>
      </div>
    </div>
  );
}

export default Card3;
