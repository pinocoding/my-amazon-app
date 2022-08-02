import React from "react";
import IndividualProduct from "./IndividualProduct";

import "./Product.css";

function ProductCard({ list, loading }) {
  return (
    <div className="card__container">
      {loading ? (

      ) : (
        <div>
          {list.map((item) => {
            return <IndividualProduct item={item} />;
          })}
        </div>
      )}
    </div>
  );
}

export default ProductCard;
