import React from "react";
import "./Author.css";

function Author({ name, infor, img }) {
  return (
    <div className="author__section">
      <h3>Author</h3>
      <div className="author__container">
        <div className="author__title">
          <img src={img} alt="" />
          <div>{name}</div>
        </div>
      </div>
      <div>
        <div>{infor}</div>
      </div>
    </div>
  );
}

export default Author;
