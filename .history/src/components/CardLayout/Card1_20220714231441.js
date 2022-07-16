import React from "react";
import "./Card.css";

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
    <div className="cardone">
      <div className="cardone__info">
        <p className="cardone__title">{title}</p>
      </div>
      <img className="cardone__img" src={image} alt="#" />
      <a>{BtnContent}</a>
    </div>
  );
}

export default Product;
