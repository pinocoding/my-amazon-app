import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Outlet, Navigate } from "react-router-dom";

const RequireAuth = () => {
  const context = useContext(DataContext);
  const currentUser = context.currentUser;

  if (currentUser) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default RequireAuth;
