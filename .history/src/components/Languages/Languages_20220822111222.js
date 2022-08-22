import React, { useContext, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

function Languages() {
  const { i18n, t } = useTranslation(["common"]);
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return <div>Languages</div>;
}

export default Languages;
