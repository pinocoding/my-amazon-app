import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";

function ProductDetails() {
  const context = useContext(AuthContext);
  const currentItem = context.currentItem;

  return (
    <div className="product-detail">
      <div class="left-column">
    <img  src="" alt="">
    <img  src="" alt="">
    <img  src="" alt="">
  </div>
    </div>
  );
}

export default ProductDetails;
