import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { DataContext } from "../DataLayer/Datalayer";

function Subtotal() {
  const context = useContext(DataContext);
  const isDark = context.isDark;
  const currentUser = context.currentUser;
  const userCartProduct = context.userCartProduct;
  const totalPrice = context.totalPrice;
  const totalQty = context.totalQty;

  return (
    <div className={`subtotal ${isDark ? "subtotal-dark" : "subtotal-light"}`}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="subtotal__form">
              <span className="subtotal__count">
                {" "}
                Subtotal&nbsp; ({totalQty} items)
              </span>
              &nbsp;: <span className="subtotal__total">{value}</span>
            </p>
          </>
        )}
        decimalScale={2}
        value={totalPrice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      {currentUser && userCartProduct.length > 0 && (
        <button>
          <Link to="/payment">Proceed to Checkout</Link>
        </button>
      )}
    </div>
  );
}

export default Subtotal;
