import Context from "./Context";
import { useContext } from "react";
import reducer, { initState } from "./reducer";

function StoreProvider({ children }) {
  const [email, setEmail] = useState("");
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}
export default StoreProvider;
