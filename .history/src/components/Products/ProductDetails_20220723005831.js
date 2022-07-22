import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";

function ProductDetails() {
  const context = useContext(AuthContext);
  const currentItem = context.currentItem;

  return (
    <div className="product-detail">
      <div class="left-column">
    <img data-image="black" src="" alt="">
    <img data-image="blue" src="" alt="">
    <img data-image="red" class="active" src="" alt="">
  </div>
    </div>
  );
}

export default ProductDetails;
