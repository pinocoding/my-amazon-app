import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";

function ProductDetails() {
  const context = useContext(AuthContext);
  const list = context.currentItem;
  console.log(list.map((item) => console.log(item));
  return;
  <div></div>;
}

export default ProductDetails;
