import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const context = useContext(DataContext);
  let currentUser = context.currentUser;
  console.log(currentUser);
  let auth = true;
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
