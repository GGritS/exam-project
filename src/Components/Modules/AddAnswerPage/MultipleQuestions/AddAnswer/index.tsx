import { Button } from "@mui/material";
import React, { FC } from "react";

import AddIcon from "@mui/icons-material/Add";

import style from "./index.module.scss";

interface AddAnswerProps {
  onAddAnswerClick: () => void;
}

export const AddAnswer: FC<AddAnswerProps> = ({ onAddAnswerClick }) => {
  return (
    <div className={style.wrapper}>
      <Button
        onClick={onAddAnswerClick}
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#4282AA",
          borderColor: "#4282AA",
        }}
      >
        <AddIcon sx={{ fontSize: 14, marginRight: "10px", color: "#4282AA" }} />
        Add Answer
      </Button>
    </div>
  );
};
