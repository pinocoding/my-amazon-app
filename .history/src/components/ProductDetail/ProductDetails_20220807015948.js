import React from "react";

function ProductDetails({ brand, color, connectivity, model, noise }) {
  return (
    <div>
      <p>{brand}</p>
      <p>{color}</p>
      <p>{connectivity}</p>
      <p>{model}</p>
      <p>{noise}</p>
    </div>
  );
}

export default ProductDetails;
