import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAuth =  () => {
  const context = useContext(DataContext);
  const location = useLocation();
  const pageLoading = context.pageLoading;
  console.log(pageLoading);
  let currentUser = context.currentUser;
  if (async currentUser) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default RequireAuth;