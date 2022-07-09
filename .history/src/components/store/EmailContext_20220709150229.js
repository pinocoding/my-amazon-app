import { createContext, useState } from "react";
// Prepares for dataLayer
const EmailContext = createContext();
function EmailProvider() {
  const [email, setEmail] = useState();
  return <EmailProvider.Provider>({children})</EmailProvider.Provider>;
}
export { EmailContext, EmailProvider };
