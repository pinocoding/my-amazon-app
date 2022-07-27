import React from "react";
import "./Indecbutton.css";
import { AuthContext } from "./DataLayer/Datalayer";

function Indecbutton() {
  const handleDecreaseQty = (item) => {
    decreaseQty(item);
  };

  const handleIncreaseQty = (item) => {
    increaseQty(item);
  };
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
