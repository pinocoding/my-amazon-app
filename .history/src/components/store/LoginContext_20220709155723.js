import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";
// Prepares for dataLayer

const LoginContext = createContext();
function LoginProvider({ children }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate;
  const SignIn = (e) => {
    //
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .auth((auth) => {
        navigate("/");
      })
      .catch((error) => error.message);
    //
  };
  const value = {
    email,
    setEmail,
    password,
    setPassword,
    SignIn,
  };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
export { LoginContext, LoginProvider };
