import React from "react";
import { useTranslation } from "react-i18next";

import ProductDes from "../CarouselForm/ProductDes";
import "./ProductDetail.css";

function ProductDetails({ img }) {
  return (
    <div className="product-detail">
      <ProductDes img={img} />
      <div>
        <br />
        <h3>Product Description</h3>
        <br />
        <div className="main">
          <img className="main-img" src={img} alt="" />
        </div>
        <div className="middle">
          <div className="middle-column">
            <img src={img} alt="" />
            <p>
              *********Adjustable Headband********* The adjustable headband can
              fit different size of the heads, and the light-weight material is
              fit completely around your ears and won't over heat your head.
              What’s more, the metal frame headset is strong and durable enough
              to last a long sessions.
            </p>
          </div>
          <div className="middle-column">
            <img src={img} alt="" />
            <p>
              *********Adjustable Headband********* The adjustable headband can
              fit different size of the heads, and the light-weight material is
              fit completely around your ears and won't over heat your head.
              What’s more, the metal frame headset is strong and durable enough
              to last a long sessions.
            </p>
          </div>
          <div className="middle-column">
            <img src={img} alt="" />
            <p>
              *********Adjustable Headband********* The adjustable headband can
              fit different size of the heads, and the light-weight material is
              fit completely around your ears and won't over heat your head.
              What’s more, the metal frame headset is strong and durable enough
              to last a long sessions.
            </p>
          </div>
        </div>
        <br />
        <div className="Secondary">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
