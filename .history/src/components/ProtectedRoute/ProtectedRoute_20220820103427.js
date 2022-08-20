import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const context = useContext(DataContext);
  let currentUser = context.currentUser;

  if (<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>

  </body>
  </html>currentUser) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
