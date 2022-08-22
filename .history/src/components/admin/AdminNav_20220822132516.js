import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Grid } from "@material-ui/core";

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
          <li>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <PersonIcon />
              </Grid>
              <Grid item>Users</Grid>
            </Grid>
          </li>
          <li>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <InventoryIcon />
              </Grid>
              <Grid item>Users</Grid>
            </Grid>
          </li>
          <li>Products</li>
        </ul>
      </div>
    </div>
  );
}

export default AdminNav;
