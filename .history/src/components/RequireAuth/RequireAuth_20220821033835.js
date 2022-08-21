import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const context = useContext(DataContext);
  const currentUser = context.currentUser;

  if (currentUser) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default RequireAuth;
