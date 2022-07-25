import React from "react";
import "./Card.css";
function Card3({ title, image, price, BtnContent }) {
  return (
    <div className="cardthree">
      <div className="cardthree__info">
        <div className="cardthree__infoup">
          <h4>{title}</h4>
          <button>Sign in securely</button>
        </div>
        <div className="cardthree__infdown">
          <p>We ship over 45 milion products around the word</p>
        </div>
      </div>
    </div>
  );
}

export default Card3;