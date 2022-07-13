import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Checkout from "../components/CheckOut/Checkout";
import Login from "../components/AuthForm/Login";
import SignIn from "../components/AuthForm/SignIn";
import AuthForm from "../components/AuthForm/AuthForm";
import { auth } from "../components/firebase";
import { useStateValue } from "../components/DataLayer/Datalayer";

function App() {
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
        dispatch({ type: "SET_USER", user: authUser });
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
