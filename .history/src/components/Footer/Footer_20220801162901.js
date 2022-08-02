import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
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
