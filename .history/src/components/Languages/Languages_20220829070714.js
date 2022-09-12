import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
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
  return (
    <select
      style={{ width: "100%", fontSize: "19px" }}
      value={localStorage.getItem("i18nextLng")}
      onChange={handleLanguageChange}
    >
      <option value="en">En</option>
      <option value="ja">日本</option>
      <option value="vi">Vie</option>
    </select>
  );
}

export default Languages;
