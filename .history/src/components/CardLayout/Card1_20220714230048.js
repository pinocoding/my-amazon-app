import React from "react";
import "./Card.css";
import { useStateValue } from "../DataLayer/Datalayer";

function Product({ id, title, image, price, BtnContent }) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
      </div>
      <img className="product__img" src={image} alt="#" />
      <a>{BtnContent}</a>
    </div>
  );
}

export default Product;
