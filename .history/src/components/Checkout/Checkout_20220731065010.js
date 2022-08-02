import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";
import "./Checkout.css";

import CheckoutProduct from "../CheckOut/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

function Checkout() {
  const context = useContext(AuthContext);
  const currentUser = context.currentUser;
  const userCartProduct = context.userCartProduct;

  return (
    <div className="checkout__container">
      <div className="checkout__left">
        {userCartProduct.length > 0 ? (
          <CheckoutProduct />
        ) : (
          <div
            style={{ fontWeight: "500", fontSize: "20px", textAlign: "center" }}
          >
            Let's go shopping now !!!
          </div>
        )}
      </div>
      <div className="checkout__right">{/* <Subtotal /> */}</div>
    </div>
  );
}

export default Checkout;
