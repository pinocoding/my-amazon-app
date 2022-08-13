import React from "react";
import Headset4k from "../../assets/images/headsets4k.png";
import One from "../../assets/images/1.png";
import Two from "../../assets/images/2.png";
import Three from "../../assets/images/3.png";
import ProductDes from "../CarouselForm/ProductDes";
import "./ProductDetail.css";

function ProductDetails({ img }) {
  return (
    <div className="product-detail">
      <h3>Product Description</h3>
      {/* <ProductDes img={img} /> */}

      <div>
        {/* <div className="main">
          <img className="main-img" src={Headset4k} alt="" />
        </div> */}
        <br />
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
            <img src={Three} alt="" />
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
          <img src={Headset4k} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
