import { useTranslation } from "react-i18next";

const { t } = useTranslation(["common"]);

export const userInputs = [
  {
    id: "Phonenumber",
    label: "Phone Number" {t("Phone Number")},
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
