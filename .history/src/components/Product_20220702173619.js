import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {/* đếm sao   */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon />
              </p>
            ))}
          {/*  */}
        </div>
      </div>
      <img src={image} alt="#" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
