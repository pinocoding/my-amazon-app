import React from "react";
import { userInputs } from "../FormSource/FormSource";

function AddProfile() {
  userInputs.map((userInput, index) => {
    return <div className="formInput"></div>;
  });
}

export default AddProfile;
