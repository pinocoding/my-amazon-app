import React from "react";
import { userInputs } from "../FormSource/FormSource";

function AddProfile() {
  return (
    <div className="addprofile-form">
      <div className="ImgUpdate">
        <img src="" alt="" />
      </div>
      <div>
        {userInputs.map((userInput, index) => {
          return (
            <div className="formInput" key={index}>
              <label>{userInput.label}</label>
              <input
                type={userInput.type}
                placeholder={userInput.placeholder}
              />
            </div>
          );
        })}
      </div>
      <div>
        <button>Send</button>
      </div>
    </div>
  );
}

export default AddProfile;
