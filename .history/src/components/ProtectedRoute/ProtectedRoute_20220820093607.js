import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Navigate } from "react-router-dom";
const context = useContext(DataContext);
const currentUser = context.currentUser;
const ProtectedRoute = ({ children }) => {
  if (!currentUser) {
    console.log(currentUser);
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
