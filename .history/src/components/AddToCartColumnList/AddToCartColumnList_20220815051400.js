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
            <div>
              <Link>
              <img src={item.image} alt="" />
              v
            </div>

            <div className="incdec">
              <Indecbutton item={item} />
            </div>
          </div>
        );
      })}
      <div className="AddToCartColumnList__total">{totalPrice}</div>
    </div>
  );
}

export default AddToCartColumnList;
