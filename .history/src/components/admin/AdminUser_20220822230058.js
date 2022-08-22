import React, { useMemo, useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

function AdminUser() {
  const context = useContext(DataContext);
  const usersList = context.usersList;
  const columns = useMemo(
    () => [
      {
        field: "FullName",
        headerName: "Full name",
        width: 100,
      },
      {
        field: "Email",
        headerName: "Email",
        width: 270,
      },
      {
        field: "Password",
        headerName: "Password",
        width: 270,
      },
      {
        field: "Phonenumber",
        headerName: "Phone Number",
        width: 270,
      },
      {
        field: "Address",
        headerName: "Address",
        width: 270,
      },
    ],
    []
  );

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={usersList}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row.FullName}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}

export default AdminUser;
