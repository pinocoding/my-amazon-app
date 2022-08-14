import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import Indecbutton from "../Indecbutton/Indecbutton";
import "./AddToCartColumnList.css";

function AddToCartColumnList() {
  const context = useContext(DataContext);
  const userCartProduct = context.userCartProduct;
  const totalPrice = context.totalPrice;
  return (
    <div className="AddToCartColumnList">
      {userCartProduct.map((item, index) => {
        return (
          <div key={index} className="AddToCartColumnListTop">
            <img src={item.image} alt="" />
<div className="incdec"></div>
            <Indecbutton item={item} />
          </div>
        );
      })}
      <div className="AddToCartColumnList__total">{totalPrice}</div>
    </div>
  );
}

export default AddToCartColumnList;
