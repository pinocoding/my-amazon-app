import { createContext, useState } from "react";
// Prepares for dataLayer
const EmailContext = createContext();
function EmailProvider({ children }) {
  const [email, setEmail] = useState();
  return (
    <EmailContext.Provider value={(email, setEmail)}>
      {children}
    </EmailContext.Provider>
  );
}
export { EmailContext, EmailProvider };
