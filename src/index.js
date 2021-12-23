import React from "react";
import ReactDOM from "react-dom";
import AppProvider from "./Context/AppProvider";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  rootElement
);
