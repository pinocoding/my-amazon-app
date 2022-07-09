import { createContext, useState } from "react";
// Prepares for dataLayer

const LoginContext = createContext();
function LoginProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const value = {
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
