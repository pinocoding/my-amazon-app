import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAdmin = () => {
  const context = useContext(DataContext);
  const pageLoading = context.pageLoading;
  const location = useLocation();
  let currentUserId = context.currentUserId;
  console.log(pageLoading);
  const adminUID = {
    adminUID: process.env.REACT_APP_ADMIN_UID,
  };
  return pageLoading === true ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );

  //
};

export default RequireAdmin;
