import React from "react";
import { userInputs } from "../FormSource/FormSource";

function AddProfile() {
  <div>
    <div>{console.log(userInputs)}</div>
    {userInputs.map((userInput, index) => {
      return (
        <div className="formInput" key={index}>
          <label>{userInput.label}</label>
          <input type="text" placeholder="pino" />
        </div>
      );
    })}
  </div>;
}

export default AddProfile;
