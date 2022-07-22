import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";

function ProductDetails() {
  const context = useContext(AuthContext);
  const list = context.currentItem;
  console.log(list);
  return;
  <div></div>;
}

export default ProductDetails;
