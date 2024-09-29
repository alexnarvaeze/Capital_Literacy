import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import "./LanguageSwitcher.css";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Close dropdown after selection
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="language-switcher">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <LanguageIcon fontSize="medium" style={{ color: "rgb(0, 73, 119)" }} />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => changeLanguage("en")}>English</li>
          <li onClick={() => changeLanguage("es")}>Español</li>
          <li onClick={() => changeLanguage("pt")}>Português</li>
          <li onClick={() => changeLanguage("hi")}>हिन्दी</li>
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitcher;
