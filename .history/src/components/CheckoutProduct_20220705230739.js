import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, image, price, rating }) {
  return (
    <div className="checkout-product">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
        </p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
