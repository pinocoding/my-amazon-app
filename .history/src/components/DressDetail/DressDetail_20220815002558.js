import React from "react";
import Headset4k from "../../assets/images/headsets4k.png";

import ProductDes from "../CarouselForm/ProductDes";
import "./DressDetail.css";

function DressDetail({ img }) {
  return (
    <div className="product-detail">
      <ProductDes img={img} />
      <div>
        <br />
        <h3>Product Description</h3>
        <br />
        <div className="main">
          <img className="main-img" src={Headset4k} alt="" />
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
          <img src={Headset4k} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DressDetail;
.product-detail {
  width: 100%;
  padding : 0 5px;
  }
  .main {
    width: 100%;
  }
  .main  > img {
    width: 100%;
  }

  .middle  {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 15px;


  }
  .middle-column img {
    width: 100%;
  }

  .middle-column  p {
    margin-top: 10px;
  }


  .Secondary > img {
    width: 100%;
  }

  @media only screen and (max-width: 768px)  {

    .middle {
      grid-template-columns: auto ;
    }
  }