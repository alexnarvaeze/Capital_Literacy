import React from "react";
import { useTranslation } from "react-google-multi-lang";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const CustomLanguageSwitcher = () => {
  const { setLanguage } = useTranslation();
  const [language, setLanguageState] = React.useState("en");

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    setLanguageState(selectedLanguage); // Update local state for rerendering
  };

  return (
    <div style={{ position: "absolute", top: 10, left: 10 }}>
      <FormControl variant="outlined" size="small">
        <InputLabel id="language-select-label">Language</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          value={language}
          onChange={handleChange}
          label="Language"
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="hi">Hindi</MenuItem>
          <MenuItem value="pt">Portuguese</MenuItem>
          <MenuItem value="es">Spanish</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomLanguageSwitcher;
