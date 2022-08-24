import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Grid } from "@material-ui/core";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function AdminNav({ handleShowUsers, handleShowProducts }) {
  const context = useContext(DataContext);
  const handleLogOut = context.handleLogOut;
  const liStyle = {
    textDecoration: "none",
    listStyle: "none",
  };
  const marginLi = {
    margin: "20px  0",
  };
  return (
    <div className="admin__nav">
      <div>
        <div className="admin__nav--title"> Main</div>
        <ul className="header__navDropDownActiveListTwo">
          <li style={styleLi}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item>dadad</Grid>
              <Grid item>
                <DashboardIcon />
              </Grid>
            </Grid>
          </li>

          <li style={styleLi}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item>{t("Language")}</Grid>
              <Grid item>
                <div style={{ width: "70px" }}>
                  <Languages />
                </div>
              </Grid>
            </Grid>
          </li>
        </ul>
        {/* <ul style={liStyle}>
          <li style={marginLi}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <DashboardIcon />
              </Grid>
              <Grid item>Dashboard</Grid>
            </Grid>
          </li>
        </ul> */}
      </div>
      <div>
        <div className="admin__nav--title">LISTS</div>
        {/* <ul style={liStyle}>
          <li onClick={handleShowUsers} style={marginLi}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <PersonIcon />
              </Grid>
              <Grid item>Users</Grid>
            </Grid>
          </li>
          <li onClick={handleShowProducts} style={marginLi}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <InventoryIcon />
              </Grid>
              <Grid item>Products</Grid>
            </Grid>
          </li>
          <li onClick={handleLogOut} style={marginLi}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <ExitToAppIcon />
              </Grid>
              <Grid item>Log out</Grid>
            </Grid>
          </li>
        </ul> */}
      </div>
    </div>
  );
}

export default AdminNav;
