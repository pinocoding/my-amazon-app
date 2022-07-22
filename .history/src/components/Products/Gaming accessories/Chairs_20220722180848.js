import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./../ProductCard.js";
import OptionLeft from "../OptionLeft.js";

function Chairs() {
  return (
    <div className="headsets">
      <div className="headsets__toolbar"></div>
      <div className="headsets__container">
        <div className="headsets__containeroptions">
          <div className="headsets__optionsleft">
            <OptionLeft />
          </div>
        </div>
        <div className="headsets__containerright">
          <div className="headsets__row">
            <Link to="/ProductDetails">
              <ProductCard col={"chairs"} id={"id"} orderBy={"desc"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chairs;
