import React from "react";
import "./Author.css";
import ShowMoreLessBtn from "./ShowMoreLessBtn/ShowMoreLessBtn";

function Author({ name, infor, img }) {
  return (
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
      <div className="Editorial Reviews">
        <h2 className="author__sectionHeader">Editorial Reviewss</h2>
        <p>Review</p>
        <div></div>
      </div>
    </div>
  );
}

export default Author;
