import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TranslationProvider } from "react-google-multi-lang";
import CustomLanguageSwitcher from "./CustomLangSwitcher.js";
import Finance from "./Components/Finance/Finance";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TranslationProvider
      apiKey={process.env.REACT_APP_TRANSLATION_API_KEY}
      defaultLanguage="en"
    >
      <App />
    </TranslationProvider>
  </React.StrictMode>
);
