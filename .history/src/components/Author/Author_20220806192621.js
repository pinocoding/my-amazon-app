import React from "react";
import "./Author.css";

function Author({ name, infor, img }) {
  return (
    <div className="author__section">
      <h3>Author</h3>
      <div className="author__contianer"></div>
      <div>{name}</div>
      <div>{infor}</div>
      <img src={img} alt="" />
    </div>
  );
}

export default Author;
