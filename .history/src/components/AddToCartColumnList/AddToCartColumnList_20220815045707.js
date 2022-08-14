import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import Indecbutton from "../Indecbutton/Indecbutton";
import "./AddToCartColumnList.css";

function AddToCartColumnList() {
  const context = useContext(DataContext);
  const userCartProduct = context.userCartProduct;
  const totalPrice = context.totalPrice;
  return (
    <div>
      {userCartProduct.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.image} alt="" />
            <div className="checkoutProduct__incdec AddToCartColumnList__incdec">
              <Indecbutton item={item} />
            </div>
          </div>
        );
      })}
      <div>{totalPrice}</div>
    </div>
  );
}

export default AddToCartColumnList;
