import React, { useState, useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { userInputs } from "../FormSource/FormSource";
import NoImg from "../../assets/images/Noimg.png";
function AddProfile() {
  const context = useContext(DataContext);
  const pageLoading = context.pageLoading;
  const handleSignup = context.handleSignup;
  const { t } = useTranslation(["common"]);
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
            placeholder="pinocode"
            type="text"
            value={context.fullName}
            onChange={(e) => context.setFullName(e.target.value)}
          />
        </div>
        <div className="formInput">
          <label>Email</label>
          <input
            placeholder="pinocode@gmail.com"
            type="text"
            value={context.email}
            onChange={(e) => context.setEmail(e.target.value)}
          />
        </div>
        <div className="formInput">
          <label>Password</label>
          <input
            type="password"
            value={context.password}
            onChange={(e) => context.setPassword(e.target.value)}
          />
        </div>
        <div className="formInput">
          <label>Password confirmation</label>
          <input
            type="password"
            value={context.rePassword}
            onChange={(e) => context.setRePassword(e.target.value)}
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
        <button onClick={handleSignup}>
          {pageLoading ? <CircleLoading /> : t("Create Account")}
        </button>
      </div>
    </form>
  );
}

export default AddProfile;
