import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { useEffect, useNavigate } from "react";
import { auth, db } from "../components/firebase";
import { useStateValue } from "../components/DataLayer/Datalayer";
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
// --layoutComponent--

function App() {
  const currentUser = false;

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate />;
  };

  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        // the user just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logout
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />

          {/* ------Login----- */}
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignIn" element={<SignIn />} />
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
    </Router>
  );
}

export default App;
