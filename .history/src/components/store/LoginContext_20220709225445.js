import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import fire from "../firebase";

// Prepares for dataLayer

const LoginContext = createContext();
function LoginProvider({ children }) {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  // -----register-----
  const handleSignin = (e) => {
    e.preventDefault();
    fire.auth().signWithEmailAndPassword;
  };
  // ------------
  // -----signIn----
  const handleLogin = (e) => {
    e.preventDefault();
  };
  // -----signIn----

  const value = {
    email,
    setEmail,
    password,
    setPassword,
    register,
  };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
export { LoginContext, LoginProvider };
