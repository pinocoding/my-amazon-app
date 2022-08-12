import React from "react";
import LoadingPage from "../LoaingPage/LoadingPage";
import IndividualProduct from "./IndividualProduct";

import "./Product.css";

function ProductCard({ list, loading }) {
  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="card__container">
          {list.map((item, index) => {
            return <IndividualProduct item={item} ,key={index} />;
          })}
        </div>
      )}
    </div>
  );
}

export default ProductCard;
