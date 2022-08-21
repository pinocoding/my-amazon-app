import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const context = useContext(DataContext);
  const authed = context.authed;

  if (!authed) {
    return <Navigate to="/" />;
  }
  return children;
};

export default RequireAuth;
