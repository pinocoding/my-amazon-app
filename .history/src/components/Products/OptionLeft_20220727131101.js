import React from "react";
import "./OptionLeft.css";
function OptionLeft({ selected, handleChange }) {
  return (
    <div>
      <select className="sort__column" value={selected} onChange={handleChange}>
        <option value="">Sorted by Featured</option>
        <option value="1">Price: Low to High</option>
        <option value="2">Price: High to Low</option>
        <option value="3">Rating: High to Low</option>
      </select>
    </div>
  );
}

export default OptionLeft;
