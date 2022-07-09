import { createContext, useState } from "react";
// Prepares for dataLayer
const EmailContext = createContext();
function EmailProvider({ children }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const value = {
    email,
    setEmail,
  };
  return (
    <EmailContext.Provider value={value}>{children}</EmailContext.Provider>
  );
}
export { EmailContext, EmailProvider };
