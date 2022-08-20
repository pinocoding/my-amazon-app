import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const context = useContext(DataContext);
  let currentUser = context.currentUser;
  if (!currentUser) {
    console.log("currentUser >>>>", currentUser);
    return <Navigate to="/" />;
  }

  // return children;
};

export default ProtectedRoute;
