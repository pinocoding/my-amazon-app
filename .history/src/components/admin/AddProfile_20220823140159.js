import React, { useState, useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { userInputs } from "../FormSource/FormSource";
import NoImg from "../../assets/images/Noimg.png";
function AddProfile() {
  const context = useContext(DataContext);
  const handleSignup = context.handleSignup;
  const handleInputChange = context.handleInputChange;
  const [file, setFile] = useState("");

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
        <div className="formInput">
          <label>FullName</label>
          <input
            className="login__input"
            type="text"
            value={context.fullName}
            onChange={(e) => context.setFullName(e.target.value)}
          />
        </div>
        <div className="formInput">
          <label>FullName</label>
          <input
            className="login__input"
            type="text"
            value={context.fullName}
            onChange={(e) => context.setFullName(e.target.value)}
          />
        </div>

        {userInputs.map((userInput) => {
          return (
            <div className="formInput" key={userInput.id}>
              <label>{userInput.label}</label>
              <input
                id={userInput.id}
                type={userInput.type}
                placeholder={userInput.placeholder}
                onChange={handleInputChange}
              />
            </div>
          );
        })}
        <button onClick={handleSignup}>Send</button>
      </div>
    </form>
  );
}

export default AddProfile;
