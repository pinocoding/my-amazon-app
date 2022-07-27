import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { AuthContext } from "../DataLayer/Datalayer";
import { getBasketTotal } from "../DataLayer/reducer";

function Subtotal({ cartProduct }) {
  const totalPrice = context.totalPrice;

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal&nbsp;
              <span className="subtotal__count">
                ({cartProduct.length} items)
              </span>
              &nbsp;: <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(cartProduct)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
