import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAdmin = () => {
  const context = useContext(DataContext);
  const location = useLocation();
  // let currentUserId = context.currentUserId;
  let currentUser = context.currentUser;
  // const adminUID = {
  //   adminUID: process.env.REACT_APP_ADMIN_UID,
  // };

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
  // currentUserId === adminUID.adminUID
};

export default RequireAdmin;
