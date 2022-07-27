import React, { useEffect, useContext } from "react";
import { useStateValue } from "../DataLayer/Datalayer";
import { AuthContext } from "../DataLayer/Datalayer";

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
              <img src={item.image} alt="" />
              <div className="individualleft__altimg">
                <div className="individualleft__altminiimg">
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
                <h4>Category&nbsp;:&nbsp;{item.category}</h4>
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
                <span>{item.price}$</span>
                <p className="cart__btn" onClick={() => handleAddToCart(item)}>
                  Add to cart
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default IndividualPage;
