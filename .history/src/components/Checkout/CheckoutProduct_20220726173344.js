import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";
import CurrencyFormat from "react-currency-format";
import Indecbutton from "../Indecbutton/Indecbutton";

import "./CheckoutProduct.css";

function CheckoutProduct() {
  const context = useContext(AuthContext);
  const userCartProduct = context.userCartProduct;

  const removeCart = context.removeCart;
  const totalPrice = context.totalPrice;

  const handleRemoveCart = (item) => {
    removeCart(item);
  };
  return (
    <div>
      {userCartProduct.map((item) => {
        return (
          <div className="checkoutProduct">
            <div>
              <img className="checkoutProduct__image" src={item.image} alt="" />
            </div>

            <div className="checkoutProduct__info">
              <p className="checkoutProduct__title">{item.title}</p>
              <div className="checkoutProduct__incdec">
                <Indecbutton item={item} />
              </div>

              <button
                className="checkoutProduct__remove"
                onClick={() => handleRemoveCart(item)}
              >
                Remove
              </button>
            </div>

            <div className="checkoutProduct__price">
              <strong>$</strong>
              <strong>{item.price * item.qty}</strong>
            </div>
          </div>
        );
      })}
      <div className="checkoutProduct__subtotal">/</div>
    </div>
  );
}

export default CheckoutProduct;
