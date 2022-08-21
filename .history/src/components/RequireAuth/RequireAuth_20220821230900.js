import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const context = useContext(DataContext);
  const authed = useContext.authed;

  return authed === true ? children : <Navigate to="/" replace />;
};

export default RequireAuth;
