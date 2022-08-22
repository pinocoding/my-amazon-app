import React, { useState } from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { userInputs } from "../FormSource/FormSource";
import NoImg from "../../assets/images/Noimg.png";
function AddProfile() {
  const [file, setFile] = useState("");
  console.log(file);
  return (
    <form className="addprofile-form">
      <div className="ImgUpdate">
        <div className="">
          <img src={NoImg} alt="" />
        </div>
        <label htmlFor="file" className="upload">
          Image : &nbsp; <DriveFolderUploadIcon />
        </label>
        <input
          type="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ display: "none" }}
        />
      </div>
      <div className="form-grid">
        {userInputs.map((userInput) => {
          return (
            <div className="formInput" key={userInput.id}>
              <label>{userInput.label}</label>
              <input
                type={userInput.type}
                placeholder={userInput.placeholder}
                onChange={handleInputChange}
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
