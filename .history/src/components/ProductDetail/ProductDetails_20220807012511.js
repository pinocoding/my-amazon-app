import React from "react";

function ProductDetails() {
  return (
    <div>
      <p>{item.details.brand}</p>
      <p>{item.details.color}</p>
      <p>{item.details.connectivity}</p>
      <p>{item.details.model}</p>
      <p>{item.details.noise}</p>
    </div>
  );
}

export default ProductDetails;
