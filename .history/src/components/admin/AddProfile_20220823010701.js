import React from "react";
import { userInputs } from "../FormSource/FormSource";

function AddProfile() {
  return (
    <form className="addprofile-form">
      <div className="ImgUpdate">
        <label htmlFor="file"></label>
      </div>
      <div className="form-grid">
        {userInputs.map((userInput) => {
          return (
            <div className="formInput" key={userInput.id}>
              <label>{userInput.label}</label>
              <input
                type={userInput.type}
                placeholder={userInput.placeholder}
              />
            </div>
          );
        })}
        <button>Send</button>
      </div>
    </form>
  );
}

export default AddProfile;
