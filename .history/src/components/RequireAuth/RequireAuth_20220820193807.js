import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const context = useContext(DataContext);
  const location = useLocation();
  const _currentUser = context.currentUser;

  return (_currentUser.uid = "rLdLLP7kHXPagDYSNRow03kIsBC3" ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  ));
};

export default RequireAuth;
