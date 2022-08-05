import React from "react";

function Toggle() {
  return (
    <div>
      {" "}
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label className="react-switch-label" htmlFor={`react-switch-new`}>
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
}

export default Toggle;
