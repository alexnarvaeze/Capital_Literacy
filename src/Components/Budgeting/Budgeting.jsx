import React from "react";
import "./Budgeting.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TranslateIcon from "@mui/icons-material/Translate";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import logo from "../Capital_One_logo.png";
import { withTranslation } from "react-google-multi-lang";

function Budgeting() {
  const [open, setOpen] = React.useState(false);
  const [Language, setLanguage] = React.useState("");
  const [Currency, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setLanguage(Number(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <div>
      <div className="headerBanner">
        <img className="logo" src={logo} alt="" />
      </div>

      <div className="BudgetContainer">
        <div className="BudgetCard">
          <div className="BudgetContent">
            <div className="BudgetHeader">
              <p style={{ fontWeight: "500" }}>Good Afternoon Juan,</p>
              <p>September summary</p>
            </div>
            <div className="BudgetGauge">
              <Gauge
                className="test"
                width={250}
                height={170}
                value={690.46}
                valueMax={1000}
                startAngle={-110}
                endAngle={110}
                sx={{
                  [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 23,
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    transform: "translate(0px, -14px)",
                  },
                  [`& .${gaugeClasses.valueText} text`]: {
                    fill: "#ffffff",
                  },
                  [`& .${gaugeClasses.valueArc}`]: {
                    fill: "#d03027",
                  },
                  [`& .${gaugeClasses.referenceArc}`]: {},
                }}
                text={({ value, valueMax }) => `$${value}/${valueMax}`}
              />
            </div>
            <div className="ButtonSection">
              <div className="BudgetButton">
                <div>Manage Budget</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTranslation(Budgeting);
