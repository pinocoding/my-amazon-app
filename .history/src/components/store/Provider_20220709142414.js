import Context from "./Context";
import {} from "react";
function Provider({ children }) {
  return <Context.Provider>{children}</Context.Provider>;
}
export default Provider;
