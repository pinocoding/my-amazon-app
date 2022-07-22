import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { useEffect } from "react";
import { auth, fs } from "../components/firebase";
import { AuthContext } from "../components/DataLayer/Datalayer";
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
  const context = useContext(AuthContext);


  useEffect(() => {
    auth.onAuthStateChanged(context.user => {
      if (context.user) {
         fs.collection("users").doc(user.uid).get().then(snapshot => {
          context.setUser(snapshot.data().context.FullName)

         })


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
