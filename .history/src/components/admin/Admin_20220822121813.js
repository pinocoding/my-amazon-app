import React from "react";
import AdminHeader from "./AdminHeader";
import "./Admin.css";

function Admin() {
  return (
    <div>
      <div className="admin">
        <AdminHeader />
        <div>
          <div className="admin__nav"></div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
