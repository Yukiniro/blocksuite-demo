import React from "react";
import { createRoot } from "react-dom/client";
import "reset-css";
import "uno.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);