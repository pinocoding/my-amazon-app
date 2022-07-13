import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./view/App";
import reportWebVitals from "./reportWebVitals";
import reducer, { initialState } from "./components/DataLayer/reducer";
import { StateProvider } from "./components/DataLayer/Datalayer";
import { AuthProvider } from "./components/DataLayer/Datalayer";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
