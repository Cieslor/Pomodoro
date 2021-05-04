import React from "react";
import ReactDOM from "react-dom";
import { GlobalContext } from "src/context";
import { StylesProvider } from "src/components";
import "./index.css";
import App from "./App";
import "./i18n/config";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContext>
      <StylesProvider>
        <App />
      </StylesProvider>
    </GlobalContext>
  </React.StrictMode>,
  document.getElementById("root")
);
