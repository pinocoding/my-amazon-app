import { createContext, useState } from "react";
// Prepares for dataLayer
const EmailContext = createContext();
function EmailProvider({ children }) {
  const [email, setEmail] = useState();
  const value = {
    email,
    setEmail,
  };
  return (
    <EmailContext.Provider value={(email, setEmail)}>
      {children}
    </EmailContext.Provider>
  );
}
export { EmailContext, EmailProvider };
