import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Payment.css";
import { AuthContext } from "../DataLayer/Datalayer";
import CheckoutProduct from "../CheckOut/CheckoutProduct";

function Payment() {
  const context = useContext(AuthContext);
  const totalQty = context.totalQty;
  const currentUserEmail = context.currentUserEmail;
  const currentUser = context.currentUser;
  const userCartProduct = context.userCartProduct;
  // console.log(userCartProduct);
  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h1>
              Checkout(<Link to="/checkout">{totalQty}</Link>)items
            </h1>
            <h3>Delivery address </h3>
            <div className="payment__address">
              <p>User: {currentUser}</p>
              <p>{currentUserEmail}</p>
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
