import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./Product.css";
import useStateValue from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item {
        id: id,
        title: title,
      }
    });
    // dispatch the item into the data source
  };
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong className="product__price">{price}</strong>
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
      <img className="product__img" src={image} alt="#" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
