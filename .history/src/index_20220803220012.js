import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./view/App";
import reportWebVitals from "./reportWebVitals";
import reducer, { initialState } from "./components/DataLayer/reducer";
import { StateProvider } from "./components/DataLayer/Datalayer";
import { DataProvider } from "./components/DataLayer/Datalayer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallBack={"Loading...."}>
    <Router>
      <React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer}>
          <DataProvider>
            <App />
          </DataProvider>
        </StateProvider>
      </React.StrictMode>
    </Router>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
