import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";
import "./Checkout.css";

import CheckoutProduct from "../CheckOut/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

function Checkout() {
  const context = useContext(AuthContext);
  const currentUser = context.currentUser;
  const cartUserProduct = context.cartUserProduct;

  return (
    <div className="checkout__container">
      <div className="checkout__left">
        {currentUser &&  cartUserProduct.length > 0  ? (
          <CheckoutProduct cartUserProduct={cartUserProduct} /> : ""
        )}
        {currentUser &&  cartUserProduct.length ? (<div>there is nothing at all</div>)}
      </div>
      <div className="checkout__right">
        <Subtotal cartProduct={cartUserProduct} />
      </div>
    </div>
  );
}

export default Checkout;
