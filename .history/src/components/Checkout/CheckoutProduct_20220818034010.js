import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../DataLayer/Datalayer";

import Indecbutton from "../Indecbutton/Indecbutton";

import "./CheckoutProduct.css";

function CheckoutProduct() {
  const context = useContext(DataContext);
  const isDark = context.isDark;
  const userCartProduct = context.userCartProduct;

  const removeCart = context.removeCart;

  const handleRemoveCart = (item) => {
    removeCart(item);
  };
  return (
    <div>
      {userCartProduct.map((item, index) => {
        return (
          <div
            key={index}
            className={`checkoutProduct ${
              isDark ? "checkoutProduct-dark" : "checkoutProduct-light"
            }`}
          >
            <div className="checkoutProduct__top">
              <Link to="/IndividualPage">
                <img
                  className="checkoutProduct__image"
                  src={item.image}
                  alt=""
                />
              </Link>
            </div>

            <div className="checkoutProduct__info">
              <p className="checkoutProduct__title">{item.title}</p>
              <div className="checkoutProduct__option">
                <div className="checkoutProduct__incdec">
                  <Indecbutton item={item} />
                </div>

                <button
                  className="checkoutProduct__remove"
                  onClick={() => handleRemoveCart(item)}
                >
                  Remove
                </button>
              </div>
            </div>

            <div className="checkoutProduct__price">
              <p>$</p>
              <span>{item.price * item.qty}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CheckoutProduct;
