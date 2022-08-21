import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAdmin = () => {
  const context = useContext(DataContext);
  const admin = context.authed;

  return authed === true ? <Outlet /> : <Navigate to="/" replace />;
  //
};

export default RequireAdmin;
