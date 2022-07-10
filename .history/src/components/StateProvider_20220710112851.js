import React, { createContext, useContext, useReducer } from "react";
// Prepares for dataLayer
const StateContext = createContext();
//
// wrap our app and provide the dataLayer
const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// pull imformation from dataLayer
const useStateValue = () => useContext(StateContext);
export { StateContext, StateProvider, seStateValue };
