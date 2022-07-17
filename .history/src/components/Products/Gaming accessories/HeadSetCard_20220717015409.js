import React from "react";
import { HeadPhonesDATA } from "../../../assets/images/HeadPhones";

import "../Product.css";

function HeadSetsCard() {
  return (
    <div className="headsetscard">
      <h4>RESULTS</h4>

      {HeadPhonesDATA.map((item) => {
        return (
          <div class="card">
          <img src="" alt="">
          <div class="content">
            <div class="row">
              <div class="details">
                <span>Headphone</span>
                <p>Premium headphone</p>
              </div>
              <div class="price">$30</div>
            </div>
            <div class="buttons">
              <button>Buy Now</button>
              <button class="cart-btn">Add to Cart</button>
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HeadSetsCard;
