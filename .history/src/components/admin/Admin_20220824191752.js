import React, { useState } from "react";

import AdminHeader from "./AdminHeader";
import AdminNav from "./AdminNav";
import AdminUser from "./AdminUser";
import AdminProducts from "./AdminProducts";
import AddProfile from "./AddProfile";
import "./Admin.css";

function Admin() {
  const [showUsers, setShowUsers] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [handleOk, setHandleOk] = useState(false);
  const handleShowUsers = () => {
    setShowUsers(true);
    setShowProducts(false);
    setShowAdd(false);
  };
  const handleShowProducts = () => {
    setShowProducts(true);
    setShowUsers(false);
    setShowAdd(false);
  };
  const handleShowAdd = () => {
    setShowAdd(true);
    setShowProducts(false);
    setShowUsers(false);
  };
  return (
    <div>
      <div className="admin">
        <AdminHeader />
        <div className="admin__handleOk"></div>
         {  handleOk &&
         < div className="admin__container">
         }

          <AdminNav
            handleShowUsers={handleShowUsers}
            handleShowProducts={handleShowProducts}
          />
          <div className="admin__right">
            <div className="admin__titte">
              <div>Add New User</div>
              <button onClick={handleShowAdd}>Add New</button>
            </div>

            <div className="admin__tb">
              {showUsers && <AdminUser />}
              {showProducts && <AdminProducts />}
              {showAdd && <AddProfile />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
