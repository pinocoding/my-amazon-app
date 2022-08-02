import React from "react";
import LoadingPage from "../LoaingPage/LoadingPage";
import IndividualProduct from "./IndividualProduct";

import "./Product.css";

function ProductCard({ list, loading }) {
  return (

      {loading ? (
        <LoadingPage />
      ) : (
        <div className="card__container">
          {list.map((item) => {
            return <IndividualProduct item={item} />;
          })}
          </div>
      )}

  );
}

export default ProductCard;
