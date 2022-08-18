import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import "./Indecbutton.css";

function Indecbutton({ item }) {
  const context = useContext(DataContext);
  const increaseQty = context.increaseQty;
  const decreaseQty = context.decreaseQty;
  const handleDecreaseQty = (item) => {
    decreaseQty(item);
  };

  const handleIncreaseQty = (item) => {
    increaseQty(item);
  };
  return (
    <div className="incdec">
      <button
        style={{ transform: "scale(0.8)" }}
        className="checkoutProduct__incdecbtn"
        onClick={() => handleDecreaseQty(item)}
      >
        -
      </button>
      <span style={{ transform: "scale(1.1)" }}>{item.qty}</span>
      <button
        style={{ transform: "scale(0.8)" }}
        className="checkoutProduct__incdecbtn"
        onClick={() => handleIncreaseQty(item)}
      >
        +
      </button>
    </div>
  );
}

export default Indecbutton;
