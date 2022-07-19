import { Button } from "@mui/material";
import React, { FC } from "react";

import AddIcon from "@mui/icons-material/Add";

import style from "./index.module.scss";
import { theme } from "../../../../../theme";

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
          color: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "140%",
        }}
      >
        <AddIcon
          sx={{
            fontSize: 14,
            marginRight: "10px",
            color: theme.palette.primary.main,
          }}
        />
        Add Answer
      </Button>
    </div>
  );
};
