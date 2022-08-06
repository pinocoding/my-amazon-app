import React from "react";
import "./Author.css";

function Author({ name, infor, img }) {
  return (
    <>
      <div className="author__section">
        <div className="author__sectionHeader">
          <h2>About the author</h2>
          <p>
            Follow authors to get new release updates, plus improved
            recommendations.
          </p>
        </div>

        <div className="author__container">
          <div className="author__left">
            <img className="author__img" src={img} alt="/#" />
          </div>
          <div className="author__right">
            <div className="author__name">{name}</div>
            <div className="author__infor">{infor}</div>
          </div>
        </div>
      </div>

      <div className="Editorial Reviews">
        <p></p>
      </div>
    </>
  );
}

export default Author;
