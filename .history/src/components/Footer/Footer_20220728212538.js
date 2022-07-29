import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer__container">
        <div className="footer__backtotop">
          <button className="footer__backtotopbtn">
            <a href="/">Back to top </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
