import React from "react";

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const currentUser = context.currentUser;
  if (currentUser) {
    console.log(currentUser);
    return children;
  }
  return <Navigate to="/" />;
};

export default ProtectedRoute;
