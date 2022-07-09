import Context from "./Context";
function Provider({ children }) {
  return <Context.Provider>{children}</Context.Provider>;
}
