import React from "react";
// import { link } from " react-router-dom";
import IndividualProduct from "./IndividualProduct";

import "./Product.css";

function ProductCard({ list }) {
  return (
    <div className="card__container">
      {list.map((item) => {
        return <IndividualProduct item={item} />;
      })}
    </div>
  );
}

export default ProductCard;
