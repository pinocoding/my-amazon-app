import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";
// Prepares for dataLayer

const LoginContext = createContext();
function LoginProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate;
  const signIn = (e) => {
    //
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => error.message);
    //
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  const value = {
    email,
    setEmail,
    password,
    setPassword,
    signIn,
    register,
  };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
export { LoginContext, LoginProvider };
