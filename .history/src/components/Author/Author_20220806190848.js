import React from "react";
import "./Author.css";

function Author() {
  return (
    <div className="author__section">
      <h3>Author</h3>
      <div>{item.author.name}</div>
      <div>{item.author.infor}</div>
      <img src={item.author.img} alt="" />
    </div>
  );
}

export default Author;
