import React, { useState } from "react";
import AdminHeader from "./AdminHeader";
import AdminNav from "./AdminNav";
import AdminUser from "./AdminUser";
import "./Admin.css";

function Admin() {
  const [showUsers, setShowUsers] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const handleShowUsers = () => {
    setShowUsers(true);
    setShowProducts(false);
  };
  const handleShowProducts = () => {
    setShowProducts(true);
  };
  return (
    <div>
      <div className="admin">
        <AdminHeader />
        <div className="admin__container">
          <AdminNav handleShowUsers={handleShowUsers} />
          <div className="admin__right">
            <div className="admin__titte">
              <div>Add New User</div>
              <button>Add New</button>
            </div>

            <div className="admin__tb">{showUsers && <AdminUser />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
