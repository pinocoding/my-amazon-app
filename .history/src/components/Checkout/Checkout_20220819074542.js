import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import AlSoLike from "../AlSoLike/AlSoLike";
import "./Checkout.css";

import CheckoutProduct from "../CheckOut/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

function Checkout() {
  const context = useContext(DataContext);
  const userCartProduct = context.userCartProduct;

  return (
    <>
      <div className="checkout__container">
        <div className="checkout__left">
          {userCartProduct.length > 0 ? (
            <CheckoutProduct />
          ) : (
            <div
              style={{
                fontWeight: "500",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              Let's go shopping now !!!
            </div>
          )}
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
