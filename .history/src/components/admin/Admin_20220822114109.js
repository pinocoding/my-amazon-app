import React from "react";
import Languages from "../Languages/Languages";
import SearchBar from "../SearchBar/SearchBar";
import avatar from "../../assets/images/dress1.png";
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
              <div className="admin__header--img">
                <div>blem</div>
                <div>
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
