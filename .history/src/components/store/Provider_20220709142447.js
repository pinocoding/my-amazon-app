import Context from "./Context";
import { useReducer } from "react";

function Provider({ children }) {
  const [state, dispatch] = useState("");
  return <Context.Provider>{children}</Context.Provider>;
}
export default Provider;
