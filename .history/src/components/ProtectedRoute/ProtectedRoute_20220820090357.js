import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  let auth = false;
  if (!auth) {
    <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
