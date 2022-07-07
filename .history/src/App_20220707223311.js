import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route pathe="/login" element={<Login/>}/></Route>
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
