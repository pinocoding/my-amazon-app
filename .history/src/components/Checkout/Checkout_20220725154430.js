import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";
import "./Checkout.css";

import CheckoutProduct from "../CheckOut/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

function Checkout() {
  const context = useContext(AuthContext);
  const currentUser = context.currentUser;
  const cartUserProduct = context.userCartProduct;

  return (
    <div className="checkout__container">
      <div className="checkout__left">
        {currentUser && cartUserProduct.length > 0 ? (
          <CheckoutProduct cartUserProduct={cartUserProduct} />
        ) : (
          <div>Let's shopping</div>
        )}
      </div>
      <div className="checkout__right">
        <Subtotal cartProduct={cartUserProduct} />
      </div>
    </div>
  );
}

export default Checkout;
