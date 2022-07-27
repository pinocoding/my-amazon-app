import React from "react";
import "./Payment.css";
import CheckoutProduct from "../CheckOut/CheckoutProduct";

function Payment() {
  return (
    <div className="payment">
      <div className="payment__container">
        <div>
          <CheckoutProduct />
        </div>
      </div>
    </div>
  );
}

export default Payment;
