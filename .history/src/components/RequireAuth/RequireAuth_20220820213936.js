import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const context = useContext(DataContext);
  const location = useLocation();
  let currentUserId = context.currentUserId;
  console.log(currentUserId);

  return (currentUserId = "ivMW3nEhllMDXaswQocqJnD8FfC2" ? (
    <Outlet />
  ) : (
    <Navigate to="/notalowed" state={{ from: location }} replace />
  ));
};

export default RequireAuth;
