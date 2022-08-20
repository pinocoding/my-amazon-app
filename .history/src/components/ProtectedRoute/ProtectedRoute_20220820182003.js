import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const context = useContext(DataContext);
  let currentUser = context.currentUser;
  console.log(currentUser);
  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
