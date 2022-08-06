import React from "react";

function ProductDetails({ brand, color, connectivity, model, noise }) {
  return (
    <div>
      <p>Brand: {brand}</p>
      <p>Color: {color}</p>
      <p>Connectivity: {connectivity}</p>
      <p>Model: {model}</p>
      <p>Noise: {noise}</p>
    </div>
  );
}

export default ProductDetails;
