import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";
import "./Product.css";

function ProductDetails() {
  const context = useContext(AuthContext);
  const currentItem = context.currentItem;

  return (
    <div className="card-wrapper">
      <div className="productdetail__card">
        <div className="productdetail__img">
          <img src={currentItem.image} alt="" />
        </div>

        <div className="product-content">
          <h2 className="product-title">{currentItem.title}</h2>

          <div className="product-rating">
            <span>{currentItem.rating}</span>
          </div>

          <div className="product-price">
            <p className="new-price">
              <span>${currentItem.price}</span>
            </p>
          </div>

          <div className="product-detail">
            <h2>about this item: </h2>
            <p>{currentItem.description}</p>
          </div>

          <div className="purchase-info">
            <input type="text" />
            <button type="button" className="btn">
              Add to Cart <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
