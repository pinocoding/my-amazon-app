import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
// Prepares for dataLayer

const LoginContext = createContext();
function LoginProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate;
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
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          alert("The email address is already in use");
        } else if (error.code === "auth/invalid-email") {
          alert("The email address is not valid.");
        } else if (error.code === "auth/operation-not-allowed") {
          alert("Operation not allowed.");
        } else if (error.code == "auth/weak-password") {
          alert("The password is too weak.");
        }
      });
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
  };
  const value = {
    email,
    setEmail,
    password,
    setPassword,
    register,
    signIn,
  };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
export { LoginContext, LoginProvider };
