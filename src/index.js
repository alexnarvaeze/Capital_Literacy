import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./i18n.js";

import Finance from "./Components/Finance/Finance";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
