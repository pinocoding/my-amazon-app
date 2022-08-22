import React from "react";
import AdminHeader from "./AdminHeader";
import "./Admin.css";

function Admin() {
  return (
    <div>
      <div className="admin">
        <AdminHeader />
        <div className="admin__container">
          <div className="admin__right">
            <div className="admin__titte">
              <button>Add New User</button>
              <button>Add New</button>
            </div>

            <div className="admin__tb"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
