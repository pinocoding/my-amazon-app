import React from "react";
import { userInputs } from "../FormSource/FormSource";

function AddProfile() {
  <div>
    <div>1</div>
    {userInputs.map((userInput, index) => {
      return (
        <div className="formInput" key={index}>
          <label>{userInput.label}</label>
          <input type={userInput.type} placeholder={userInput.placeholder} />
        </div>
      );
    })}
  </div>;
}

export default AddProfile;
