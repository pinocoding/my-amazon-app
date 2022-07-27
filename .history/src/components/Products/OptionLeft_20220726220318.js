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
          <option value="1">Volvo</option>
          <option value="2">Saab</option>
          <option value="3">Opel</option>
          <option value="4">Audi</option>
          <br /> <br />
          <input type="submit" />
        </select>
      </form>
    </div>
  );
}

export default OptionLeft;
