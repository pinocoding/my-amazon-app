import React from "react";

function Card3(title, image, price, BtnContent) {
  return (
    <div>
      {" "}
      <div className="cardone">
        <div className="cardone__info">
          <h1 className="cardone__title">{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Card3;
