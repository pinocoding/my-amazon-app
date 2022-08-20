import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const context = useContext(DataContext);
  const location = useLocation();
  let currentUserId = context.currentUserId;
  const adminUID = {
    adminUID: process.env.REACT_APP_ADMIN_UID,
  };
  console.log(adminUID);

  return currentUserId === adminUID.key ? (
    <Outlet />
  ) : (
    <Navigate to="/notalowed" state={{ from: location }} replace />
  );
};

export default RequireAuth;
