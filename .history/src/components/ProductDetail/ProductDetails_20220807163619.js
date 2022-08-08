import React from "react";

function ProductDetails({ brand, color, connectivity, model, noise }) {
  return (
    <div>
      <p>
        <strong>Brand :</strong>
        {brand}
      </p>
      <p>
        <strong>Color :</strong> {color}
      </p>
      <p>
        <strong>Connectivity :</strong> {connectivity}
      </p>
      <p>
        <strong>Model :</strong> {model}
      </p>
      <p>
        <strong>Noise :</strong> {noise}
      </p>
    </div>
  );
}

export default ProductDetails;
