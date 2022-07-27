import React from "react";

function OptionLeft() {
  console.log();
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
