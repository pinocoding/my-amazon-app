import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";

function ProductDetails() {
  const context = useContext(AuthContext);
  const list = context.list;
  return <div> {list.map(item)=> {

  }}</div>;
}

export default ProductDetails;
