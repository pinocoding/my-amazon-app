import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../DataLayer/reducer";

import "./CheckoutProduct.css";

function CheckoutProduct({ cartUserProduct }) {
  const context = useContext(AuthContext);
  const increaseQty = context.increaseQty;
  const decreaseQty = context.decreaseQty;
  const handleDecreaseQty = (item) => {
    decreaseQty(item);
  };

  const handleIncreaseQty = (item) => {
    increaseQty(item);
  };
  return (
    <div>
      {cartUserProduct.map((item) => {
        return (
          <div className="checkoutProduct">
            <div>
              <img className="checkoutProduct__image" src={item.image} alt="" />
            </div>

            <div className="checkoutProduct__info">
              <p className="checkoutProduct__title">{item.title}</p>
              <div className="checkoutProduct__incdec">
                <button
                  className="checkoutProduct__incdecbtn"
                  onClick={() => handleDecreaseQty(item)}
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  className="checkoutProduct__incdecbtn"
                  onClick={() => handleIncreaseQty(item)}
                >
                  +
                </button>
              </div>

              <button className="checkoutProduct__remove"> Remove </button>
            </div>

            <div className="checkoutProduct__price">
              <strong>$</strong>
              <strong>{item.price * item.qty}</strong>
            </div>
          </div>
        );
      })}
      <div className="checkoutProduct__subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal&nbsp;
                <span className="subtotal__count">
                  ({cartUserProduct.length} items)
                </span>
                &nbsp;: <strong>{value}</strong>
              </p>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(cartUserProduct)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
    </div>
  );
}

export default CheckoutProduct;
