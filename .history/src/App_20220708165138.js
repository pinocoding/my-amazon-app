import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
