import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Admin.css";

function Admin() {
  return (
    <div>
      <div className="admin">
        <div className="admin__header">
          <div className="admin__header--logo">PinoaAdmin</div>
          <div className="admin__header--infor">
            <div className="admin__header--search">
              <SearchBar />
            </div>
            <div className="admin__header--avatar">
              <div>avatar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
