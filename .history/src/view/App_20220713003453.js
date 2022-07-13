import "./App.css";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Checkout from "../components/CheckOut/Checkout";
import Login from "../components/AuthForm/Login";
import SignIn from "../components/AuthForm/SignIn";
import AuthForm from "../components/AuthForm/AuthForm";

function App() {
  return (
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

        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/CreateAccount" element={<AuthForm />} />

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
  );
}

export default App;
