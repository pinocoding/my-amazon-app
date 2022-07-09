import Context from "./Context";
import { useState, createContext } from "react";

function StoreProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("
  return (
    <Context.Provider value={[email, setEmail]}>{children}</Context.Provider>
  );
}
export default StoreProvider;
