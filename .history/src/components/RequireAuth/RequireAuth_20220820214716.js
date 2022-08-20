import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const context = useContext(DataContext);
  const location = useLocation();
  let currentUserId = context.currentUserId;
  const adminUID = ivMW3nEhllMDXaswQocqJnD8FfC2;
  console.log(process.env.REACT_APP_ADMIN_UID);

  return currentUserId === process.env.REACT_APP_ADMIN_UID ? (
    <Outlet />
  ) : (
    <Navigate to="/notalowed" state={{ from: location }} replace />
  );
};

export default RequireAuth;
