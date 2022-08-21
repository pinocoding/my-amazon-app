import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const context = useContext(DataContext);
  const authed = context.authed;

  return authed === true ? children : <Navigate to="/" replace />;
};

export default RequireAuth;
