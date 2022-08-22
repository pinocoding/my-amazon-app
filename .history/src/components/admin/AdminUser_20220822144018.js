import React, { useMemo } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

function AdminUser() {
  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "displayName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: true,
      },
      {
        field: "email",
        headerName: "Email",
        description: "This column has a value getter and is not sortable.",
        sortable: true,
      },
      {
        field: "password",
        headerName: "Password",
        description: "This column has a value getter and is not sortable.",
        sortable: true,
      },
    ],
    []
  );

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
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
