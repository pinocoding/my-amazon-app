import { createContext, useState } from "react";
// Prepares for dataLayer
const EmailContext = createContext();
function EmailProvider() {
  const [email, setEmail] = useState();
  return <EmailProvider>({children})</EmailProvider>;
}
export { EmailContext, EmailProvider };
