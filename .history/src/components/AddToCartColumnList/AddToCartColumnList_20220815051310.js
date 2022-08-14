import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataLayer/Datalayer";
import Indecbutton from "../Indecbutton/Indecbutton";
import "./AddToCartColumnList.css";

function AddToCartColumnList() {
  const navigate = useNavigate;
  const context = useContext(DataContext);
  const userCartProduct = context.userCartProduct;
  const totalPrice = context.totalPrice;

  return (
    <div className="AddToCartColumnList">
      {userCartProduct.map((item, index) => {
        return (
          <div key={index} className="AddToCartColumnListTop">
            <div>
              <img src={item.image} alt="" />
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
