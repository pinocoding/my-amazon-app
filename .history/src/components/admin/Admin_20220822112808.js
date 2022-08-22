import React from "react";
import Languages from "../Languages/Languages";
import SearchBar from "../SearchBar/SearchBar";
import "./Admin.css";

function Admin() {
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
              <div className="admin__header--img">avatar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
