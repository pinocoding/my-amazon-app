import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";

// --layoutComponent--
//
import Admin from "../components/Admin/Admin";
//
import AuthForm from "../components/AuthForm/AuthForm";
import "./App.css";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Checkout from "../components/CheckOut/Checkout";
import Login from "../components/AuthForm/Login";
import SignIn from "../components/AuthForm/SignIn";
import HeadSets from "../components/Products/Gaming accessories/HeadSets";
import KeyBoards from "../components/Products/Gaming accessories/KeyBoards";
import Mouses from "../components/Products/Gaming accessories/Mouses";
import Chairs from "../components/Products/Gaming accessories/Chairs";
import ProductDetails "../components/Products/ProductDetails"
// --layoutComponent--

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          // ---home---
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        {/*  */}
        {/* ------Login----- */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/SignIn"
          element={
            // <RequireAuth>
            <SignIn />
            // </RequireAuth>
          }
        />
        <Route path="/CreateAccount" element={<AuthForm />} />
        {/* ---//---- */}
        {/* ------Checkout---- */}
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        {/*  */}
        <Route
          path="/headsets"
          element={
            <>
              <Header />
              <HeadSets />
            </>
          }
        />
        <Route
          path="/keyboards"
          element={
            <>
              <Header />
              <KeyBoards />
            </>
          }
        />
        <Route
          path="/Mouses"
          element={
            <>
              <Header />
              <Mouses />
            </>
          }
        />
        <Route
          path="/Chairs"
          element={
            <>
              <Header />
              <Chairs />
            </>
          }
        />
        {/* test admin  */}
        <Route path="/ProductDetails" />
        element={<ProductDetails />}
        <Route
          path="/Admin"
          element={
            <>
              <Admin />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
