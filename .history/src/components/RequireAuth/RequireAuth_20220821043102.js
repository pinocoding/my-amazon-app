import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const context = useContext(DataContext);
  const authed = context.authed;
  console.log(authed);
  if (!authed) {
    return children;
  }
  return <Navigate to="/" />;
};

export default RequireAuth;
