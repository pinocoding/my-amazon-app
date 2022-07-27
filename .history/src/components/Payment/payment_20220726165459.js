import React, { useContext } from "react";
import "./Payment.css";
import { AuthContext } from "../DataLayer/Datalayer";
import CheckoutProduct from "../CheckOut/CheckoutProduct";

function Payment() {
  const context = useContext(AuthContext);
  const userCartProduct = context.userCartProduct;
  // console.log(userCartProduct);
  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery </h3>
            <div className="payment__address">
              <p>user.name</p>
              <p>user.email</p>
              <p>address*****</p>
            </div>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            <CheckoutProduct userCartProduct={userCartProduct} />
          </div>
          <div className="payment__details">{/* stripe */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
