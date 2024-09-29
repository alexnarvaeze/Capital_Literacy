import React from "react";
import ReactDOM from "react-dom/client";
import Budgeting from "./Components/Budgeting/Budgeting";
import App from "./App.jsx";
import { TranslationProvider } from "react-google-multi-lang";
import CustomLanguageSwitcher from "./CustomLangSwitcher.js";
import Finance from "./Components/Finance/Finance";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TranslationProvider
      apiKey="AIzaSyDiGQEtGLY5eHItch0cpO_etBNowE106R0"
      defaultLanguage="en"
    >
      <App />
    </TranslationProvider>
  </React.StrictMode>
);
