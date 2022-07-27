import React, { useState } from "react";

function OptionLeft() {
  // 👇️ initial value of empty string (first option)
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div>
      <select value={selected} onChange={handleChange}>
        <option value="">Sorted by Featured</option>
        <option value="1">Price: Low to High</option>
        <option value="2">Price: High to Low</option>
        <option value="3">Kiwi 🥝</option>
      </select>
    </div>
  );
}

export default OptionLeft;
