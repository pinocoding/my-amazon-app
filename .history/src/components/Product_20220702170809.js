import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {/* đếm sao   */}
          {Array(rating)
            .fill()
            .map((_, i) =>
              console.log(i)
              // <p>

              //   <StarIcon />
              // </p>
            )}
          {/*  */}
        </div>
      </div>
      <img
        src="https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/188/K.jpg"
        alt=""
      />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
