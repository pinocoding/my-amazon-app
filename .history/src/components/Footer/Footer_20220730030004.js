import React from "react";
import "./Footer.css";

function Footer() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div className="footer__container">
        <div className="footer__backtotop">
          <span>
            <a href="/">Back to top</a>
          </span>
        </div>
        <div className="footer__middle"></div>
        <div className="footer__top"></div>
      </div>
    </div>
  );
}

export default Footer;
