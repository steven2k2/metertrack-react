import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import ruggedTheme from "./theme/ruggedTheme";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={ruggedTheme}>
    <App />
  </ThemeProvider>
);