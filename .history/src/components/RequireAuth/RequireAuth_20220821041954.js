import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const context = useContext(DataContext);
  const currentUser = context.currentUser;

  if (!currentUser) {
    return <Navigate to="/" />;
  }
  return <Outlchildrenet />;
};

export default RequireAuth;
