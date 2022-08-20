import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import NotAlowed from "../NotAlowed/NotAlowed";
const RequireAuth = () => {
  const context = useContext(DataContext);
  const location = useLocation();
  const currentUser = context.currentUser;

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/notalowed" state={{ from: location }} replace />
  );
};

export default RequireAuth;
