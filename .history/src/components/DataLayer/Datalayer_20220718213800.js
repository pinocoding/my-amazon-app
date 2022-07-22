import React, { createContext, useContext, useState, useReducer } from "react";

// Prepares for dataLayer

const AuthContext = createContext();
const StateContext = createContext();
function AuthProvider({ children }) {
  const [name, setName] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const value = {
    name,
    setName,
    isActive,
    setIsActive,
    user,
    email,
    setEmail,
    emailError,
    password,
    setPassword,
    setEmailError,
    setPasswordError,
    hasAccount,
    setHasAccount,
    passwordError,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
const useStateValue = () => useContext(StateContext);
export {
  StateContext,
  StateProvider,
  useStateValue,
  AuthContext,
  AuthProvider,
};
