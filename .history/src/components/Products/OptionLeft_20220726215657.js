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
      <h4 className="">Brand</h4>
      <p>
        <input type="checkbox" />
        Razer
      </p>
      <p>
        <input type="checkbox" />
        SteelSeries
      </p>
      <p>
        <input type="checkbox" />
        HyperX
      </p>
      <p>
        <input type="checkbox" />
        Corsair
      </p>
      <p>
        <input type="checkbox" />
        BENGOO
      </p>

      <div>
        <p>
          <input type="checkbox" />
          Logitech
        </p>
        <p>
          <input type="checkbox" />
          Turtle Beach
        </p>

        <p>
          <input type="checkbox" />
          Sony
        </p>
      </div>

      <h4>Video Game Price</h4>
    </div>
  );
}

export default OptionLeft;
