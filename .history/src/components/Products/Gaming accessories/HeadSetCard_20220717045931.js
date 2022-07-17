import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../DataLayer/Datalayer";
import { HeadPhonesDATA } from "../../FakeData/HeadPhonesDATA";

import "../Product.css";

function HeadSetsCard() {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (e) => {
    e.preventDefault();
    console.log(HeadPhonesDATA.image);
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: HeadPhonesDATA.id,
        title: HeadPhonesDATA.title,
        image: HeadPhonesDATA.image,
        price: HeadPhonesDATA.price,
        rating: HeadPhonesDATA.rating,
      },
    });
  };
  return (
    <div className="section-card">
      {/* <h4>RESUlT</h4> */}
      {HeadPhonesDATA.map((item) => {
        return (
          <div className="card">
            <img src={item.image} alt="" />

            <h1>{item.title}s</h1>
            <p className="price">{item.price}</p>
            <p className="card__description">{item.description}</p>
            <p>
              <button onClick={addToBasket}>Add to Cart</button>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default HeadSetsCard;
