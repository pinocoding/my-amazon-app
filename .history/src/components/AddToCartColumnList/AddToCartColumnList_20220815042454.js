import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import "./AddToCartColumnList.css";

function AddToCartColumnList() {
  const context = useContext(DataContext);
  const userCartProduct = context.userCartProduct;
  return (
    <div>
      {userCartProduct.map(item, (index) => {
        return;
      })}
    </div>
  );
}

export default AddToCartColumnList;
