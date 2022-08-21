import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const context = useContext(DataContext);
  const location = useLocation();
  let currentUser = context.currentUser;
  let test = false;

  return !test ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;
