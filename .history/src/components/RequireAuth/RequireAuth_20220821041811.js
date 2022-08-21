import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const context = useContext(DataContext);
  const currentUser = context.currentUser;

  if (!currentUser) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default RequireAuth;
