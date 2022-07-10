import "./App.css";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Checkout from "../components/CheckOut/CheckOut";
import Login from "../components/AuthForm/Login";
import SignIn from "../components/AuthForm/SignIn";
import CreateAccount from "../components/AuthForm/CreateAccount";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Header /> */}
          <Route
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
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          {/*  */}
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
