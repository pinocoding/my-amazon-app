import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import CreateAccount from "./components/CreateAccount";

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
          {<SignIn />} />
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
