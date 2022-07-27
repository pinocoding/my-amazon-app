import React, { useState } from "react";

function OptionLeft() {
  // 👇️ initial value of empty string (first option)
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    console.log("Label 👉️", event.target.selectedOptions[0].label);
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <div>
      <select value={selected} onChange={handleChange}>
        <option value="">--Choose and option--</option>
        <option value="apple">Apple 🍏</option>
        <option value="banana">Banana 🍌</option>
        <option value="kiwi">Kiwi 🥝</option>
      </select>
    </div>
  );
}

export default OptionLeft;
