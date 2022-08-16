import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import "./Card.css";
function Card3({ title, link, titleLogin }) {
  const context = useContext(DataContext);
  const isDark = context.isDark;
  return (
    <div className="cardthree">
      <div className="cardthree__info">
        <div
          className={`cardthree__infoup ${isDark ? "card-dark" : "card-light"}`}
        >
          <h3>{title}</h3>
          <button>
            <a style={{ textDecoration: "none", color: "black" }} href={link}>
              {titleLogin}
            </a>
          </button>
        </div>
        <div className="cardthree__infodown">
          <div className="carthree__infoimg">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card3;
