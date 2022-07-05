import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, image, price, rating }) {
  return (
    <div className="checkout-product">
      <img src={image} alt="" />
    </div>
  );
}

export default CheckoutProduct;
