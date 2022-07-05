import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, image, price, rating }) {
  return (
    <div className="checkout-product">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {/* đếm sao   */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon />
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
