import React, { useState } from "react";

function OptionLeft({ document }) {
  const [selected, setSelected] = useState("");
  if (selected == 1) {
    const document = "price";
    const sorting = "asc";
  }
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div>
      <select value={selected} onChange={handleChange}>
        <option value="0">Sorted by Featured</option>
        <option value="1">Price: Low to High</option>
        <option value="2">Price: High to Low</option>
        <option value="3">Avg, Customer Review</option>
      </select>
    </div>
  );
}

export default OptionLeft;
