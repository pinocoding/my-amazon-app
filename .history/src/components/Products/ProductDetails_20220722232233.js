import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";

function ProductDetails() {
  const context = useContext(AuthContext);
  const currentItem = context.currentItem;
  {
    console.log(currentItem);
  }
  return;

  <div></div>;
}

export default ProductDetails;
