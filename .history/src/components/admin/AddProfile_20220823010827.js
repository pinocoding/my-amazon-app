import React from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { userInputs } from "../FormSource/FormSource";

function AddProfile() {
  return (
    <form className="addprofile-form">
      <div className="ImgUpdate">
        <label htmlFor="file">
          Image : <DriveFolderUploadIcon />
        </label>
        <input type="file" />
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
