import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";

function ProductDetails() {
  const context = useContext(AuthContext);
  const currentItem = context.currentItem;
  return;

  <div>{console.log(currentItem)}</div>;
}

export default ProductDetails;
