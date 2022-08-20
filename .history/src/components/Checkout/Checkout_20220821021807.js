import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import AlSoLike from "../AlSoLike/AlSoLike";
import "./Checkout.css";

import CheckoutProduct from "../CheckOut/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

function Checkout() {
  const context = useContext(DataContext);
  const userCartProduct = context.userCartProduct;
  const currentUser = context.currentUser;
  const styleOne = {
    maxWidth: "1500px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <>
      <div className="checkout__container">
        <div className="checkout__left">
          {userCartProduct.length > 0 && <CheckoutProduct />}
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
      <div style={styleOne}>
        <AlSoLike />
      </div>
    </>
  );
}

export default Checkout;
