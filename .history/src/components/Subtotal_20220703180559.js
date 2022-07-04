import React from "react";
import CurrencyFormat from "react-currency-number-format";
import "./Subtotal.css";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat renderText={value} => (
        <>
        <p>
        Subtotal({basket.lenth})
        </p>
        </>
      ) />
    </div>
  );
}

export default Subtotal;
