import React from "react";
import "./Toggle.css";

function Toggle({ isOn, handleToggle }) {
  return (
    <div>
      <input
        id={`react-switch-new`}
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        type="checkbox"
      />
      <label className="react-switch-label" htmlFor={`react-switch-new`}>
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
}

export default Toggle;
