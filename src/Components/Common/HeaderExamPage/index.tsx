import { Button } from "@mui/material";
import React, { FC } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";

import style from "./index.module.scss";

export const HeaderExamPage: FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.headerTextBlock}>
        <div
          className={style.BreadcrumbsWrap}
        >{`Exam > New Exam Title here`}</div>
        <div className={style.pageTitle}>New Exam Title Here</div>
      </div>
      <div className={style.headerButtonsBlock}>
        <Button
          variant="text"
          sx={{ textTransform: "none", color: "#777777", marginRight: "30px" }}
        >
          <CloseIcon
            sx={{ fontSize: 17, color: "#777777", marginRight: "10px" }}
          />
          Delete exam
        </Button>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "140%",
          }}
        >
          <CheckCircleOutlineIcon
            sx={{ fontSize: "12px", marginRight: "10px" }}
          />
          Save Exam
        </Button>
      </div>
    </div>
  );
};
