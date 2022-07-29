import React from "react";
import "./Card.css";
function Card3({ title, image, price, BtnContent, link }) {
  return (
    <div className="cardthree">
      <div className="cardthree__info">
        <div className="cardthree__infoup">
          <h3>{title}</h3>
          <button>
            <a style={{ textDecoration: "none" }} href={link}>
              Sign in securely
            </a>
          </button>
        </div>
        <div className="cardthree__infodown">
          <div className="carthree__infoimg">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card3;
