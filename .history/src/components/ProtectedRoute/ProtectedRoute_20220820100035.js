import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, currentUser }) => {
  // const context = useContext(DataContext);
  // let currentUser = context.currentUser;
  console.log("currentUser >>>>", currentUser);
  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
