import React from "react";

function OptionLeft({ selected, handleChange }) {
  return (

      <select value={selected} onChange={handleChange}>
        <option value="0">Sorted by Featured</option>
        <option value="1">Price: Low to High</option>
        <option value="2">Price: High to Low</option>
      </select>

}

export default OptionLeft;
