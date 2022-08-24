import React, { useMemo, useContext, useState } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { GridToolbar } from "@mui/x-data-grid-premium";
import AdminHandleModal from "./AdminHandleModal";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

function AdminUser() {
  const [handleOk, setHandleOk] = useState(false);
  const context = useContext(DataContext);

  const usersList = context.usersList;
  const styleActionbtn = {
    display: "flex",
  };
  const viewBtn = {
    padding: "5px 10px",
    border: "none",
    fontSize: "15px",
    borderRadius: "5px",
    cursor: "pointer",
    color: "green",
    backgroundColor: "#9ed9ad",
  };
  const delBtn = {
    fontSize: "15px",
    padding: "5px 10px",
    marginLeft: "20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "crimson",
    backgroundColor: "pink",
  };
  const handleOke = () => {
    setHandleOk(true);
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: "200",
      renderCell: (params) => {
        return (
          <div className="cellAction" style={styleActionbtn}>
            <button className="view-btn" style={viewBtn}>
              View
            </button>
            <button
              className="delete-btn"
              style={delBtn}
              onClick={() => handleOke(params)}
            >
              Delete
            </button>
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
        width: 100,
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
        width: 150,
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
    <div>
      {handleOk && <AdminHandleModal setHandleOk={setHandleOk} />}
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          tittle="Users list"
          rows={usersList}
          columns={columns.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          getRowId={(row) => row.id}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </div>
  );
}

export default AdminUser;
