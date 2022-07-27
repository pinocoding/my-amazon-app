import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";
import "./Indecbutton.css";

function Indecbutton({ item }) {
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
      <button
        className="checkoutProduct__incdecbtn"
        onClick={() => handleDecreaseQty(item)}
      >
        -
      </button>
      <span></span>
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
