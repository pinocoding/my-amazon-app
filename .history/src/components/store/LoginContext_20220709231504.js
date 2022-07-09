import { createContext, useState, useEffect } from "react";

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
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  // -----register-----
  const handleSignin = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  // ------------
  // -----signIn----
  const handleLogin = (e) => {
    clearErrors();
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
          case "auth/user-not-found":
            setEmailError(err.message);
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  // -----signIn----
  const handleLogout = (e) => {
    clearErrors();
    e.preventDefault();
    fire.auth().signout();
  };
  const authlistener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authlistener();
  }, []);

  const value = {
    user,
    email,
    setEmail,
    password,
    setPassword,
  };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
export { LoginContext, LoginProvider };
