import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import "./Card.css";

function Product({ title, image, link1, idLink }) {
  const context = useContext(DataContext);
  const isDark = context.isDark;
  return (
    <div
      id={idLink}
      className={`cardone ${isDark ? "card-dark" : "card-light"}`}
    >
      <div className="cardone__info">
        <h3 className="cardone__title">{title}</h3>
      </div>
      <div className="cardone__img"></div>
      <a href={link1}>
        <img className="cardone__img" src={image} alt="#" />
      </a>
    </div>
  );
}

export default Product;
