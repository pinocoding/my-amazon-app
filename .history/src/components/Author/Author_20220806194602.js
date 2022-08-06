import React from "react";
import "./Author.css";

function Author({ name, infor, img }) {
  return (
    <div className="author__section">
      <h3>Author</h3>
      <div className="author__container">
        <div className="author__title">
          <div className="author__img">
            <img src={img} alt="/#" />
          </div>

          <div>{name}</div>
        </div>
        <div className="author__right">
          <p>{infor}</p>
        </div>
      </div>
    </div>
  );
}

export default Author;
