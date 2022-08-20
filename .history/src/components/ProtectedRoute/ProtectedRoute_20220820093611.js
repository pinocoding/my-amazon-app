import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Navigate } from "react-router-dom";

const currentUser = context.currentUser;
const ProtectedRoute = ({ children }) => {
  const context = useContext(DataContext);
  if (!currentUser) {
    console.log(currentUser);
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
