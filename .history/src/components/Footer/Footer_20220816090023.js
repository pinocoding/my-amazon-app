import React from "react";
import { useTranslation } from "react-i18next";
import { scrollToTop } from "../Backtotop/Backtotop";
import "./Footer.css";

function Footer() {
  const { t } = useTranslation(["common"]);
  return (
    <div>
      <div className="footer__container">
        <div className="footer__backtotop">
          <span onClick={scrollToTop}>{t("Back to top")}</span>
        </div>
        <div className="footer__middle"></div>
      </div>
    </div>
  );
}

export default Footer;
