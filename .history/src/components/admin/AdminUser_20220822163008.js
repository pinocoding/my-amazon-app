import React, { useMemo, useCotext } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

function AdminUser() {
  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "displayName",
        headerName: "Full name",
        width: 270,
      },
      {
        field: "email",
        headerName: "Email",
        width: 270,
      },
      {
        field: "password",
        headerName: "Password",
        width: 270,
      },
    ],
    []
  );

  const rows = [
    { id: 1, displayName: "Snow", email: "Jon", password: 35 },
    { id: 2, displayName: "Lannister", email: "Cersei", password: 42 },
    { id: 3, displayName: "Lannister", email: "Jaime", password: 45 },
    { id: 4, displayName: "Stark", email: "Arya", password: 16 },
    { id: 5, displayName: "Targaryen", email: "Daenerys", password: null },
    { id: 6, displayName: "Melisandre", email: null, password: 150 },
    { id: 7, displayName: "Clifford", email: "Ferrara", password: 44 },
    { id: 8, displayName: "Frances", email: "Rossini", password: 36 },
    { id: 9, displayName: "Roxie", firstNemailame: "Harvey", password: 65 },
  ];
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}

export default AdminUser;
