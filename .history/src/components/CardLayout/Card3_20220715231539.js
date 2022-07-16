import React from "react";
import "./Card.css";
function Card3({ title, image, price, BtnContent }) {
  return (
    <div className="cardthree">
      <div className="cardthree__info">
        <div className="cardthree__infoup">
          <h3>{title}</h3>
          <button>Sign in securely</button>
        </div>
        <div className="cardthree__infdown">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Card3;
