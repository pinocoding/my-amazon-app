import Context from "./Context";
import { useReducer } from "react";
import reducer, { initState } from "./reducer";

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, in);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}
export default Provider;
