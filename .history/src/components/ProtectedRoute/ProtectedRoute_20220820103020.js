import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Navigate } from "react-router-dom";

const ProtectedRoute = async ({ children }) => {
  const context = useContext(DataContext);
  let currentUser = context.currentUser;
  const condition = async () => {
    if (await currentUser) {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  };
};

export default ProtectedRoute;
