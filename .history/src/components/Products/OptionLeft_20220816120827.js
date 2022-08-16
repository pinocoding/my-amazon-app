import React from "react";
import { useTranslation } from "react-i18next";
import "./OptionLeft.css";
function OptionLeft({ selected, handleChange }) {
  const { t } = useTranslation(["common"]);
  return (
    <div>
      <select className="sort__column" value={selected} onChange={handleChange}>
        <option value="0">{t("Sorted by Featured")}</option>
        <option value="1">{t("Price: Low to High")}</option>
        <option value="2">{t("")}</option>
        <option value="3">Hot Deal</option>
      </select>
    </div>
  );
}

export default OptionLeft;
