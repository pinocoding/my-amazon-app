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
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Select options={techCompanies} />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}

export default OptionLeft;
