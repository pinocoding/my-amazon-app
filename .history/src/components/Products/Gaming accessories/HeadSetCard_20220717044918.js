import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../DataLayer/Datalayer";
import { HeadPhonesDATA } from "../../FakeData/HeadPhonesDATA";

import "../Product.css";

function HeadSetsCard() {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TO_BASKET",
    });
    // dispatch the item into the data source
  };
  return (
    <div className="section-card">
      {/* <h4>RESUlT</h4> */}
      {HeadPhonesDATA.map((item) => {
        return (
          <div class="card">
            <img src={item.image} alt="" />

            <h1>{item.title}s</h1>
            <p className="price">{item.price}</p>
            <p class="card__description">{item.description}</p>
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
