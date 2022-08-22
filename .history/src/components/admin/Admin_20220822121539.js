import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { DataContext } from "../DataLayer/Datalayer";

import "./Admin.css";

function Admin() {
  const context = useContext(DataContext);
  const currentUserName = context.currentUserName;
  const { t } = useTranslation(["common"]);
  return (
    <div>
      <div className="admin"></div>
    </div>
  );
}

export default Admin;
