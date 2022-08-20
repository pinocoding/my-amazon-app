import React, { useContext } from "react";
import { DataContext } from "../components/DataLayer/Datalayer";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let auth = false;
  if (!auth) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
