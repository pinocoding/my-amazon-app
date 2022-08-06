import React from "react";

function ProductDetails({ brand, color, connectivity, model, noise }) {
  return (
    <div>
      <p>{brand}</p>
      <p>{color}</p>
      <p>{connectivity}</p>
      <p>{model}</p>
      <p>{brand}</p>
    </div>
  );
}

export default ProductDetails;
