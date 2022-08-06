import React from "react";
import "./Author.css";

function Author( {name. infor, img}) {
  return (
    <div className="author__section">
      <h3>Author</h3>
      <div>{name}</div>
      <div>{item.author.infor}</div>
      <img src={item.author.img} alt="" />
    </div>
  );
}

export default Author;
