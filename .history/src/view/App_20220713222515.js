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

function App() {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);
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
