import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const context = useContext(DataContext);
  let currentUser = context.currentUser;

  if (currentUser) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
