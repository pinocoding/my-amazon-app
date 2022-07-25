import React, { useEffect,useContext } from "react";
import { useStateValue } from "../DataLayer/Datalayer";
import { AuthContext } from "../DataLayer/Datalayer";

import StarRateIcon from "@mui/icons-material/StarRate";
import "./Product.css";

function IndividualPage() {
  const context = useContext(AuthContext)
  const uid = context.uid
  const [{ itembox, basket }, dispatch] = useStateValue();
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(itembox));
  }, [itembox]);
  const handleAddToCard = () => {
    if( uid)

  }

  return (
    <div>
      {itembox.map((item) => {
        return (
          <div className="individual__container">
            <div className="individualleft__column">
              <img src={item.image} alt="" />
            </div>
            <div className="individualright__column">
              {/* <!-- Product Description --> */}
              <div class="product__description">

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
              <div class="product__configuration">
                <div class="product-color">
                  <span>Color</span>

                  <div class="color-choose">
                    <div>
                      <input type="radio" />
                      <label for="red">
                        <span></span>
                      </label>
                    </div>
                    <div>
                      <input type="radio" />
                      <label for="blue">
                        <span></span>
                      </label>
                    </div>
                    <div>
                      <input type="radio" />
                      <label for="black">
                        <span></span>
                      </label>
                    </div>
                  </div>
                </div>
                {/* <!-- Cable Configuration --> */}
              </div>
              <div class="product__price">
                <span>{item.price}$</span>
                <p class="cart__btn" onClick={handleAddToCard}>Add to cart</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default IndividualPage;
