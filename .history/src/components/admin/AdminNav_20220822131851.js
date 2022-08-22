import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
function AdminNav() {
  return (
    <div className="admin__nav">
      <div>
        <div> Main</div>
        <ul>
          <li>
            <DashboardIcon />
            Dashboard
          </li>
        </ul>
      </div>
      <div>
        <div>LISTS</div>
        <ul>
          <li><PersonIcon/>Users</li>
          <li>Products</li>
          <li>Orders</li>
          <li>Delivery</li>
        </ul>
      </div>
    </div>
  );
}

export default AdminNav;
