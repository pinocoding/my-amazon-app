import React, { createContext, useContext, useState, useReducer } from "react";

// Prepares for dataLayer
const StateContext = createContext();

const AuthContext = createContext();
function AuthProvider({ children }) {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [user] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const value = {
    fullName,
    setFullName
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
