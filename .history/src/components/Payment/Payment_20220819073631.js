import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
import "./Payment.css";
import { DataContext } from "../DataLayer/Datalayer";
import CheckoutProduct from "../CheckOut/CheckoutProduct";

function Payment() {
  const context = useContext(DataContext);
  const totalQty = context.totalQty;
  const isDark = context.isDark;
  const totalPrice = context.totalPrice;
  const currentUserEmail = context.currentUser.email;
  const currentUserName = context.currentUser.displayName;
  const userCartProduct = context.userCartProduct;
  const { t } = useTranslation(["common"]);
  return (
    <div className={`payment ${isDark ? "payment-dark" : "payment-light"}`}>
      <div className="payment__container">
        <h1>
          {t("Checkout")}Checkout(
          <Link to="/checkout">
            {totalQty} {t("item")}
          </Link>
          )
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>{t("Delivery address")}</h3>
          </div>
          <div className="payment__address">
            <p>
              {t("User")} : {currentUserName}
            </p>
            <p>
              {t("Email")} : {currentUserEmail}
            </p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>{t("Review items and delivery")}</h3>
          </div>
          <div className="payment__items">
            <CheckoutProduct userCartProduct={userCartProduct} />
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Total : $ {totalPrice}</h3>
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
