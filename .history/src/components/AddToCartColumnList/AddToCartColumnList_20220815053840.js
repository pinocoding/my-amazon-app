import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
              <Link to="/checkout">
                <img src={item.image} alt="" />
              </Link>
            </div>

            <div className="incdec">
              <Indecbutton item={item} />
            </div>
            <div>{item.price}</div>
          </div>
        );
      })}
      <div className="AddToCartColumnList__total">{totalPrice}</div>
    </div>
  );
}

export default AddToCartColumnList;
