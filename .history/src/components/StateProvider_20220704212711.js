import React, { createContext, useContext, useReducer } from "react";
// Prepares for dataLayer
export const StateContext = createContext();
//
// wrap our app and provide the dataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// pull imformation from dataLayer
export const useStateValue = () => useContext(StateContext);
