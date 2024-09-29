import React, { useState } from "react";
import "./LearningCenter.css";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";

// Import card data from the separate file
import cardData from "./cardData";

const LearningCenter = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="title">{t("LearningCenter")}</div>
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`card card-${card.id}`}
            onClick={() => handleCardClick(card)}
          >
            <div className="card-content">{t(`cardTitle.${card.id}`)}</div>
          </div>
        ))}
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          {selectedCard && (
            <>
              <DialogTitle>
                {t(`cardTitle.${selectedCard.id}`)}
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <div className="modal-content">
                  <img
                    src={selectedCard.image}
                    alt={selectedCard.title}
                    className="modal-image"
                  />
                  <p>{t(`cardDescription.${selectedCard.id}`)}</p>
                </div>
              </DialogContent>
            </>
          )}
        </Dialog>
      </div>
    </div>
  );
};

export default LearningCenter;
