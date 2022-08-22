import React from "react";

function AminHeader() {
  return (
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
              <span>
                {t("Hello")} {currentUserName}
              </span>
            </div>
            <div className="admin__header--img">
              <img src={avatar} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AminHeader;
