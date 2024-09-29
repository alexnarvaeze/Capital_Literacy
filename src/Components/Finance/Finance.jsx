import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import logo from "./Interactive_Brokers1.png";
import logo1 from "./charles-schwab.png";
import logo2 from "./SAXO.png";
import logo3 from "./etoro.png";
import logo4 from "./exante.png";
import { useTranslation } from "react-i18next";

// Sample data for multiple cards

function Finance() {
  const { t } = useTranslation();
  const cardData = [
    {
      title: "Interactive Brokers",
      image: logo,
      description: t("interactiveBrokersDescription"),
      link: "https://www.interactivebrokers.com/en/home.php", // Add the URL here
    },
    {
      title: "Charles Schwab International",
      image: logo1, // You can replace this with a different image for the second card
      description: t("charlesSchwabDescription"),
      link: "https://international.schwab.com/", // Add the URL for card 2
    },
    {
      title: "Saxo Bank",
      image: logo2, // You can replace this with a different image for the third card
      description: t("saxoBankDescription"),
      link: "https://www.home.saxo/", // Add the URL for card 3
    },
    {
      title: "eToro",
      image: logo3, // You can replace this with a different image for the third card
      description: t("eToroDescription"),
      link: "https://www.etoro.com/en-us/", // Add the URL for card 3
    },
    {
      title: "Exante",
      image: logo4, // You can replace this with a different image for the third card
      description: t("exanteDescription"),
      link: "https://exante.eu/", // Add the URL for card 3
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
  };

  const handleLearnMore = () => {
    window.open(cardData[currentIndex].link, "_blank"); // Opens the link in a new tab
  };

  return (
    <div style={{ textAlign: "center", padding: "5px", marginTop: "50px" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center", // Horizontally centers the card
          alignItems: "center", // Vertically centers the card
          height: "70vh", // Adjusted height to leave space for the header
        }}
      >
        <Card
          sx={{
            width: "380px",
            height: "600px",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // This will keep the image at the top and move the content and actions down
            background:
              "linear-gradient(180deg, #97ccee , rgba(0, 73, 119, 0.9) )",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
            color: "white",
            padding: "20px",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)", // Makes text stand out
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              color: "white", // Keep this if it matches your theme
              fontFamily: "Noto Sans", // Ensure the font matches
              fontWeight: 600, // Match the font weight with Budgeting's BudgetHeader
              fontSize: "25px", // Set to the same font size as the BudgetHeader
              marginBottom: "10px",
              textAlign: "left",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", // Keep this if you want the text shadow
            }}
          >
            {t("investmentCorner")}
          </Typography>

          <CardMedia
            component="img"
            sx={{
              width: "75%",
              height: "35%",
              objectFit: "contain",
              display: "block",
              margin: "0 auto", // Centers the image horizontally
              maxHeight: 200, // Adjust max height to avoid overflowing
              marginBottom: "10px",
            }}
            image={cardData[currentIndex].image}
            title={cardData[currentIndex].title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="white"
              fontWeight="bold"
              sx={{ fontFamily: "Noto Sans", marginBottom: "5px" }}
            >
              {cardData[currentIndex].title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "white",
                whiteSpace: "pre-line",
                fontFamily: "Noto Sans",
                fontWeight: 500,
              }}
            >
              {cardData[currentIndex].description}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center", // Centers the buttons horizontally
              gap: 2, // Adds space between buttons
            }}
          >
            <Button
              size="small"
              onClick={handlePrev}
              sx={{
                border: "2px solid white",
                borderColor: "white",
                backgroundColor: "rgba(0, 73, 119, 0.9)",
                color: "white",
                fontFamily: "Noto Sans",
              }}
            >
              {t("previous")}
            </Button>
            <Button
              size="small"
              onClick={handleLearnMore}
              sx={{
                border: "2px solid white",
                borderColor: "white",
                backgroundColor: "rgba(0, 73, 119, 0.9)",
                color: "white",
              }}
            >
              {t("learnMore")}
            </Button>
            <Button
              size="small"
              onClick={handleNext}
              sx={{
                border: "2px solid white",
                borderColor: "white",
                backgroundColor: "rgba(0, 73, 119, 0.9)",
                color: "white",
              }}
            >
              {t("next")}
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default Finance;
