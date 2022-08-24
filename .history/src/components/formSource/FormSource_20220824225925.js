import React from "react";
import { useTranslation } from "react-i18next";

function FormSource() {
  const { t } = useTranslation(["common"]);
  const userInputs = [
    {
      id: "Phonenumber",
      label: t("Phone Number"),
      type: "number",
      placeholder: "123456789",
    },
    {
      id: "Address",
      label: "Address",
      type: "text",
      placeholder: "Long An /L.A ",
    },
    {
      id: "Country",
      label: "Country",
      type: "text",
      placeholder: "Viet Nam",
    },
  ];
}

export default FormSource;
