import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Payment.css";
import { DataContext } from "../DataLayer/Datalayer";
import CheckoutProduct from "../CheckOut/CheckoutProduct";

function Payment() {
  const context = useContext(DataContext);
  const totalQty = context.totalQty;
  const currentUserEmail = context.currentUserEmail;
  const currentUserName = context.currentUserName;
  const userCartProduct = context.userCartProduct;

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/checkout">{totalQty}-item</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address </h3>
          </div>
          <div className="payment__address">
            <p>User: {currentUserName}</p>
            <p>Email: {currentUserEmail}</p>
            <p>address*****</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {/*  */}
            <CheckoutProduct userCartProduct={userCartProduct} />
            {/*  */}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">{/* stripe */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
