import Context from "./Context";
import { useContext } from "react";

function StoreProvider({ children }) {
  const [email, setEmail] = useState("");
  return (
    <Context.Provider value={[email, setEmail]}>{children}</Context.Provider>
  );
}
export default StoreProvider;
