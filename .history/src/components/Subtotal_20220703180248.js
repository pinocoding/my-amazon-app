import React from "react";
import CurrencyFormat from "react-currency-number-format";
import "./Subtotal.css";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat></CurrencyFormat>
    </div>
  );
}

export default Subtotal;
