import React from "react";

function OptionLeft() {
  const techCompanies = [
    { label: "Apple", value: 1 },
    { label: "Facebook", value: 2 },
    { label: "Netflix", value: 3 },
    { label: "Tesla", value: 4 },
    { label: "Amazon", value: 5 },
    { label: "Alphabet", value: 6 },
  ];
  return (
    <div>
      <form action="">
        <select name="cars" id="cars">
          <option value="1">Sort by: Featured </option>
          <option value="2">Price:Low to Hight</option>
          <option value="3">Price:High to Low</option>
          <option value="4">Customer Review</option>
          <br /> <br />
          <input type="submit" />
        </select>
      </form>
    </div>
  );
}

export default OptionLeft;
