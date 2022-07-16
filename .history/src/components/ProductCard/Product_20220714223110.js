import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./Product.css";
import { useStateValue } from "../DataLayer/Datalayer";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,

        BtnCotent: BtnCotent,
      },
    });
    // dispatch the item into the data source
  };
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">Fashion Finds under $200</p>

        {/* <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon />
              </p>
            ))}
        </div> */}
      </div>
      <img className="product__img" src={image} alt="#" />
      <a onClick={addToBasket}></a>
    </div>
  );
}

export default Product;
