import React, { createContext, useContext, userReducer } from "react";
// Prepares for dataLayer
export const StateContext = createContext();
//
export const Stateprovider = ({ reducer, initialState, children }) => (
  <Stateprovider.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Stateprovider.Provider>
);
