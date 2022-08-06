import React from "react";
import "./Author.css";

function Author({ name, infor, img }) {
  return (
    <div className="author__section">
      <h3>About the author</h3>
      <div className="author__container">
        <div className="author__left">
          <div className="author__img">
            <img src={img} alt="/#" />
          </div>{" "}
        </div>

        <div className="author__name">{name}</div>
      </div>
    </div>
  );
}

export default Author;
