import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Pie.css";
import { useTranslation } from "react-i18next";

const ADDRESS = process.env.REACT_APP_CURR_ADDRESS;

function Pie() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [groceryExpenses, setGroceryExpenses] = useState(0);
  const [billsExpenses, setBillsExpenses] = useState(0);
  const [subscriptionExpenses, setSubscriptionExpenses] = useState(0);
  const [gasExpenses, setGasExpenses] = useState(0);
  const [otherExpenses, setOtherExpenses] = useState(0);
  const [savings, setSavings] = useState("");

  useEffect(() => {
    // Retrieve token from localStorage
    const token = localStorage.getItem("userToken");

    // If token exists, fetch the latest budget from the backend
    if (token) {
      axios
        .get(`http://${ADDRESS}:8005/api/auth/user-data`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setGroceryExpenses(response.data.groceryExpenses);
          setBillsExpenses(response.data.billsExpenses);
          setSubscriptionExpenses(response.data.subscriptionExpenses);
          setGasExpenses(response.data.gasExpenses);
          setOtherExpenses(response.data.otherExpenses);
          setSavings(response.data.savings);
        })
        .catch((error) => {
          console.error("Failed to fetch user data:", error);
          if (error.response && error.response.status === 401) {
            alert("Session expired or invalid token. Please log in again.");
          }
        });
    } else if (location.state) {
      // If no token, but location state exists, use it (e.g., user just logged in)
      setGroceryExpenses(location.state.groceryExpenses);
      setBillsExpenses(location.state.billsExpenses);
      setSubscriptionExpenses(location.state.subscriptionExpenses);
      setGasExpenses(location.state.gasExpenses);
      setOtherExpenses(location.state.otherExpenses);
      setSavings(location.state.savings);
    }
  }, [location.state, navigate]);

  return (
    <div className="PieContainer">
      <p className="PieHeading">{t("PieTitle")}</p>
      <div className="PieContent">
        <PieChart
          series={[
            {
              data: [
                {
                  id: 0,
                  value: groceryExpenses,
                  label: t("PieVal1"),
                  color: "#E3B505",
                },
                {
                  id: 1,
                  value: billsExpenses,
                  label: t("PieVal2"),
                  color: "#004977",
                },
                {
                  id: 2,
                  value: subscriptionExpenses,
                  label: t("PieVal3"),
                  color: "#C879FF",
                },
                {
                  id: 3,
                  value: gasExpenses,
                  label: t("PieVal4"),
                  color: "#44BBA4",
                },
                {
                  id: 4,
                  value: otherExpenses,
                  label: t("PieVal5"),
                  color: "#FF6F61",
                },
                {
                  id: 5,
                  value: savings,
                  label: t("PieVal6"),
                  color: "#e0e8ac",
                },
              ],
              highlightScope: { fade: "global", highlight: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            },
          ]}
          width={400}
          height={200}
        />
        <p className="PieTitle">{t("PieFooter")}</p>
      </div>
    </div>
  );
}

export default Pie;
