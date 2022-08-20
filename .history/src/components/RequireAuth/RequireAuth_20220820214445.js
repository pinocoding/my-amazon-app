import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const context = useContext(DataContext);
  const location = useLocation();
  let currentUserId = context.currentUserId;

  return currentUserId === process.env.REACT_APP__ADMIN_UID ? (
    <Outlet />
  ) : (
    <Navigate to="/notalowed" state={{ from: location }} replace />
  );
};

export default RequireAuth;
