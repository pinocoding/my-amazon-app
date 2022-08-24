import React, { useMemo, useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { GridToolbar } from "@mui/x-data-grid-premium";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

function AdminUser() {
  const context = useContext(DataContext);
  const usersList = context.usersList;
  const styleActionbtn= {
    display : "flex"
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: "200",
      renderCell: () => {
        return (
          <div className="cellAction" style= {}>
            <div className="view-btn">View</div>
            <div className="delete-btn">Delete</div>
          </div>
        );
      },
    },
  ];

  const columns = useMemo(
    () => [
      {
        field: "displayName",
        headerName: "Full name",
        width: 150,
      },
      {
        field: "Email",
        headerName: "Email",
        width: 250,
      },
      {
        field: "Password",
        headerName: "Password",
        width: 150,
      },
      {
        field: "phoneNumber",
        headerName: "Phone Number",
        width: 200,
      },
      {
        field: "Address",
        headerName: "Address",
        width: 150,
      },
      {
        field: "timeStamp",
        headerName: "Created At",
        width: 150,
      },
    ],
    []
  );

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        tittle="Users list"
        rows={usersList}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row.displayName}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        components={{ Toolbar: GridToolbar }}
      />
    </Box>
  );
}

export default AdminUser;
