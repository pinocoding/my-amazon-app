import React from "react";
import { useTranslation } from "react-i18next";

import Languages from "../Languages/Languages";
import SearchBar from "../SearchBar/SearchBar";
import avatar from "../../assets/images/dress1.png";
import "./Admin.css";

function Admin() {
  const currentUserName = context.currentUserName;
  const { t } = useTranslation(["common"]);
  return (
    <div>
      <div className="admin">
        <div className="admin__header">
          <div className="admin__header--logo">Pinoadmin</div>
          <div className="admin__header--infor">
            <div className="admin__header--search">
              <SearchBar />
            </div>
            <div className="admin__header--admin">
              <div>
                <Languages />
              </div>
              <div className="admin__header--author">
                <div className="admin__header--name">
                  <span>{t("Hello")}</span>
                </div>
                <div className="admin__header--img">
                  <img src={avatar} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
