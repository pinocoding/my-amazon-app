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
        {currentUser && userCartProduct.length > 0 ? (
          <CheckoutProduct userCartProduct={userCartProduct} />
        ) : (
          <div>Let's shopping</div>
        )}
      </div>
      <div className="checkout__right">
        <Subtotal cartProduct={userCartProduct} />
      </div>
    </div>
  );
}

export default Checkout;
