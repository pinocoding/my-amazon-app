import React, { createContext, useContext, userReducer } from "react";
// Prepares for dataLayer
export const StateContext = createContext();
//
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
