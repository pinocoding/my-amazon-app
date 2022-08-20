import React from "react";

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, currentUser }) => {
  if ({ currentUser }) {
    (<console className="log"></console>)({ currentUser });
    return children;
  }
  return <Navigate to="/" />;
};

export default ProtectedRoute;
