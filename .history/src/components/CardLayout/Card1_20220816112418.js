import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import "./Card.css";

function Product({ title, image, link1, gamingaccess }) {
  const context = useContext(DataContext);
  const isDark = context.isDark;
  return (
    <div className={`cardone ${isDark ? "card-dark" : "card-light"}`}>
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
