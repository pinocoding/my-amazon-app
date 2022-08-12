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
          {list.map((key, item) => {
            return <IndividualProduct item={item} key={key} />;
          })}
        </div>
      )}
    </div>
  );
}

export default ProductCard;
