import React from "react";

function AdminNav() {
  return (
    <div className="admin__nav">
      <div>
        <div>Main</div>
        <ul>
          <li>Dashboard</li>
        </ul>
      </div>
      <div>
        <div>LISTS</div>
        <ul>
          <li>Users</li>
          <li>Products</li>
          <li>Orders</li>
          <li>Delivery</li>
        </ul>
      </div>
    </div>
  );
}

export default AdminNav;
