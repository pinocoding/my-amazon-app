import React from "react";
import { scrollToTop } from "../Backtotop/Backtotop";
import "./Footer.css";

function Footer() {
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <div>
      <div className="footer__container">
        <div className="footer__backtotop">
          <span onClick={scrollToTop}>Back to top</span>
        </div>
        <div className="footer__middle"></div>
      </div>
    </div>
  );
}

export default Footer;
