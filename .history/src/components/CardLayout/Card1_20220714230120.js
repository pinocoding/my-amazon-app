import React from "react";
import "./Card.css";
import { useStateValue } from "../DataLayer/Datalayer";

function Product({ id, title, image, price, BtnContent }) {
  // const [{ basket }, dispatch] = useStateValue();

  // const addToBasket = () => {
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       id: id,
  //       title: title,
  //       image: image,

  //       BtnContent: BtnContent,
  //     },
  //   });
  //   // dispatch the item into the data source
  // };
  return (
    <div className="card1">
      <div className="product__info">
        <p className="product__title">{title}</p>
      </div>
      <img className="product__img" src={image} alt="#" />
      <a>{BtnContent}</a>
    </div>
  );
}

export default Product;
