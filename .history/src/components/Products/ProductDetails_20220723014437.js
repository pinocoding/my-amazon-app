import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";
import "./Product.css";

function ProductDetails() {
  const context = useContext(AuthContext);
  const currentItem = context.currentItem;

  return (
    <div class="card-wrapper">
      <div class="producudetail__card">
        <div class="product-imgs">
          <img src={currentItem.image} alt="" />
        </div>

        <div class="product-content">
          <h2 class="product-title">{currentItem.title}</h2>
          <a href="#" class="product-link">
            visit store
          </a>
          <div class="product-rating">
            <span>{currentItem.rating}</span>
          </div>

          <div class="product-price">
            <p class="new-price">
              <span>${currentItem.price}</span>
            </p>
          </div>

          <div class="product-detail">
            <h2>about this item: </h2>
            <p>{currentItem.description}</p>
          </div>

          <div class="purchase-info">
            <input type="text" />
            <button type="button" class="btn">
              Add to Cart <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
