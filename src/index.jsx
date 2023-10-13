import React from "react";
import ReactDOM from "react-dom/client";
import Application from "./app";
import "./styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);
