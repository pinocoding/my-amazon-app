import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";
import "./Indecbutton.css";

function Indecbutton() {
  const context = useContext(AuthContext);
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
