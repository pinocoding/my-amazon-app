import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAuth = async () => {
  const context = useContext(DataContext);
  const location = useLocation();
  const pageLoading = context.pageLoading;
  console.log(pageLoading);
  let currentUser = context.currentUser;

  return (await currentUser) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
