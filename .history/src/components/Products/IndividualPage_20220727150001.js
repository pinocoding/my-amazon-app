import React, { useEffect, useContext } from "react";
import { useStateValue } from "../DataLayer/Datalayer";
import { AuthContext } from "../DataLayer/Datalayer";
import { Link } from "react-router-dom";

import StarRateIcon from "@mui/icons-material/StarRate";
import "./Product.css";

function IndividualPage() {
  const context = useContext(AuthContext);
  const addToCart = context.addToCart;

  const [{ itembox }] = useStateValue();
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(itembox));
  }, [itembox]);
  const handleAddToCart = (item) => {
    addToCart(item);
  };
  return (
    <div>
      {itembox.map((item) => {
        return (
          <div key={item.id} className="individual__container">
            <div className="individualleft__column">
              <div className="individualleft__mainimg">
                <img src={item.image} alt="" />
              </div>

              <div className="individualleft__altimg">
                <div className="individualleft__altimgmini">
                  <img src={item.image} alt="" />
                </div>
                <div className="individualleft__altimgmini">
                  <img src={item.image} alt="" />
                </div>
                <div className="individualleft__altimgmini">
                  <img src={item.image} alt="" />
                </div>
                <div className="individualleft__altimgmini">
                  <img src={item.image} alt="" />
                </div>
              </div>
            </div>
            <div className="individualright__column">
              {/* <!-- Product Description --> */}
              <div className="product__description">
                <h1>{item.title}</h1>
                <p className="product__rating">
                  {Array(item.rating)
                    .fill()
                    .map(() => (
                      <StarRateIcon />
                    ))}
                </p>
                <div className="product__info">
                  <p>{item.description}</p>
                </div>
                <p className="product__category">
                  Category&nbsp;:&nbsp;{item.category}
                </p>
              </div>
              {/* <!-- Product Configuration --> */}
              <div className="product__configuration">
                <div className="product-color">
                  <span>Color</span>

                  <div className="color-choose">
                    <div>
                      <input type="radio" />
                      <label>
                        <span></span>
                      </label>
                    </div>
                    <div>
                      <input type="radio" />
                      <label>
                        <span></span>
                      </label>
                    </div>
                    <div>
                      <input type="radio" />
                      <label>
                        <span></span>
                      </label>
                    </div>
                  </div>
                </div>
                {/* <!-- Cable Configuration --> */}
              </div>
              <div className="product__price">
                <div>Price&nbsp;:&nbsp;{item.price}$</div>
              </div>

              <div className="product__buy">
                <button
                  className="cart__btn"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to cart
                </button>

                <button className="buy__btn">Buy Now</button>
              </div>
            </div>
          </div>
        );
      })}
      <div></div>
    </div>
  );
}

export default IndividualPage;
