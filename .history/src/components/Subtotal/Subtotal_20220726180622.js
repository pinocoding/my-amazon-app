import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { AuthContext } from "../DataLayer/Datalayer";

function Subtotal() {
  const context = useContext(AuthContext);
  const currentUser = context.currentUser;
  const totalPrice = context.totalPrice;
  const totalQty = context.totalQty;

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal&nbsp;
              <span className="subtotal__count">({totalQty} items)</span>
              &nbsp;: <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

        <button> <Link to="/payment">Proceed to Checkout  </Link></button>

    </div>
  );
}

export default Subtotal;
