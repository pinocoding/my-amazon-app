import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
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
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item>{t("Dark theme")}</Grid>
              <Grid item>
                <MaterialUISwitch checked={!!checked} onChange={handleChange} />
              </Grid>
            </Grid>
          </li>
          <li>
            <PersonIcon />
            Users
          </li>
          <li>
            <InventoryIcon />
            Products
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminNav;
