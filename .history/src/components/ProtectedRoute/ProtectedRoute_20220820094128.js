import React from "react";

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, currentUser }) => {
  if (currentUser) {
    return children;
  }
  return <Nav />;
};

export default ProtectedRoute;
