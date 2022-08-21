import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAuth =  () => {
  const context = useContext(DataContext);
  const location = useLocation();
  const pageLoading = context.pageLoading;
  console.log(pageLoading);
  let currentUser = context.currentUser;

  async   return  currentUser ? (
     await <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
