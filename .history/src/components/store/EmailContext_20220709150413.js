import { createContext, useState } from "react";
// Prepares for dataLayer
const EmailContext = createContext();
function EmailProvider() {
  const [email, setEmail] = useState();
  return <EmailContext.Provider></EmailContext.Provider>;
}
export { EmailContext, EmailProvider };
