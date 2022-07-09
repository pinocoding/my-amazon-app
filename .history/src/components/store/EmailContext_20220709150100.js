import { createContext, useState } from "react";
// Prepares for dataLayer
const EmailContext = createContext();
function EmailProvider() {
  const [email, setEmail] = useEmailContext();
}
export { EmailContext, EmailProvider };
