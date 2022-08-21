import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const context = useContext(DataContext);
  const authed = useContext.authed;

  return authed === true ? <Outlet /> : <Navigate to="/" replace />;
};

export default RequireAuth;
