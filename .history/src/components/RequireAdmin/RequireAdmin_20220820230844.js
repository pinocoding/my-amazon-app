import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Outlet, Navigate } from "react-router-dom";

const RequireAdmin = () => {
  const context = useContext(DataContext);

  let currentUserId = context.currentUserId;
  const adminUID = {
    adminUID: process.env.REACT_APP_ADMIN_UID,
  };

  return currentUserId === adminUID.adminUID ? <Outlet /> : <Navigate to="/" />;
};

export default RequireAdmin;
