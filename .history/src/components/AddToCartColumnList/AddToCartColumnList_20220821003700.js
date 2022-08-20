import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../DataLayer/Datalayer";

import Indecbutton from "../Indecbutton/Indecbutton";
import "./AddToCartColumnList.css";

function AddToCartColumnList() {
  const context = useContext(DataContext);
  const isDark = context.isDark;
  const userCartProduct = context.userCartProduct;
  const totalPrice = context.totalPrice;

  return (
    <div
      className={`AddToCartColumnList ${
        isDark ? "AddToCartColumnList-dark" : "AddToCartColumnList-light"
      }`}
    >
      {userCartProduct.map((item, index) => {
        return (
          <div key={index} className="AddToCartColumnListTop">
            <div>
              <Link to="/checkout">
                <img src={item.image} alt="" />
              </Link>
            </div>
            <div style={{ width: "100%", padding: "0 2px" }}>
              <Indecbutton item={item} />
            </div>

            <div className="AddToCartColumnListTopPrice">$ {item.price}</div>
          </div>
        );
      })}
      <div className="AddToCartColumnList__total">${totalPrice}</div>
    </div>
  );
}

export default AddToCartColumnList;
