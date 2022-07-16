import React from "react";
import "./Card.css";

function Product({ title, image, price, BtnContent }) {
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
    <div className="cardone">
      <div className="cardone__info">
        <h1 className="cardone__title">{title}</h1>
      </div>
      <div className="cardone__img"></div>
      <img className="cardone__img" src={image} alt="#" />
      <a>{BtnContent}</a>
    </div>
  );
}

export default Product;
