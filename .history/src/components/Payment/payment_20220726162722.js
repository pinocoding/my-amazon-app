import React from "react";
import "./Payment.css";
import CheckoutProduct from "../CheckOut/CheckoutProduct";

function Payment() {
  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery </h3>
            <div className="payment__address">
              <p>user.email</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
