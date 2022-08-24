import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Grid } from "@material-ui/core";

function AdminNav({ handleShowUsers, handleShowProducts }) {
  return (
    <div className="admin__nav">
      <div>
        <div className="admin__nav--main"> Main</div>
        <ul>
          <li>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <DashboardIcon />
              </Grid>
              <Grid item>Dashboard</Grid>
            </Grid>
          </li>
        </ul>
      </div>
      <div>
        <div>LISTS</div>
        <ul>
          <li onClick={handleShowUsers}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <PersonIcon />
              </Grid>
              <Grid item>Users</Grid>
            </Grid>
          </li>
          <li onClick={handleShowProducts}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <InventoryIcon />
              </Grid>
              <Grid item>Products</Grid>
            </Grid>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminNav;