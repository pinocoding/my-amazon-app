import React from "react";
import "./Indecbutton.css";

function Indecbutton() {
  return (
    <div>
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
  );
}

export default Indecbutton;
