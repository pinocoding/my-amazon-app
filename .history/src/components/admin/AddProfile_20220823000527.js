import React from "react";
import { userInputs } from "../FormSource/FormSource";

function AddProfile() {
  <div>
    {
 userInputs.map((userInput, index) => {
  return (
    <div className="formInput">
      <label>UserName</label>
      <input type="text" placeholder="pino" />
    </div>
  );
});
    }

  </div>
}

export default AddProfile;
