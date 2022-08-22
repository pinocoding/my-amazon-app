import React, { useState } from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { userInputs } from "../FormSource/FormSource";
import NoImg from "../../assets/images/Noimg.png";
function AddProfile() {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});

  const handleInputChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

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
                id={userInput.id}
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
