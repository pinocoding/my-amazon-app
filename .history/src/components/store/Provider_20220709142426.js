import Context from "./Context";
import { useReducer } from "react
";
function Provider({ children }) {
  return <Context.Provider>{children}</Context.Provider>;
}
export default Provider;
