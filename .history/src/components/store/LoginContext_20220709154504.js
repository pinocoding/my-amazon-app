import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";
// Prepares for dataLayer

const LoginContext = createContext();
function LoginProvider({ children }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate;
  const handleClick = (e) => {
    //
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(password)
      .auth((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
    //
  };
  const value = {
    email,
    setEmail,
    password,
    setPassword,
    handleClick,
  };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
export { LoginContext, LoginProvider };
