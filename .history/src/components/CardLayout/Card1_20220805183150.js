import React, {useContext} from "react";
import "./Card.css";

function Product({ title, image, BtnContent, link1, gamingaccess }) {
  return (
      const isDark = context.isDark;
    <div className="cardone">
      <div className="cardone__info">
        <h1 className="cardone__title">{title}</h1>
      </div>
      <div className="cardone__img"></div>
      <a href={link1}>
        <img className="cardone__img" src={image} alt="#" />
      </a>
    </div>
  );
}

export default Product;
