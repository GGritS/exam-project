import { Breadcrumbs, Button, Link, Typography } from "@mui/material";
import React, { FC } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import { theme } from "./../../../theme";

import style from "./index.module.scss";
import { HeaderBreadcrumbs } from "../HeaderBreadcrumbs";

const breadcrumbs = [
  <Link underline="hover" key="1" href="/" className={style.breadcrumbsTitle}>
    <img
      src="https://file.rendit.io/n/FusVMCUEkxXJnIyg7K9j.svg"
      alt="img"
      className={style.breadcrumbsImg}
    />
    <div className={style.breadcrumbsText}>Exams</div>
  </Link>,
  <Typography key="2">
    <div className={style.breadcrumbsText}>New Exam Title Here</div>
  </Typography>,
];

export const HeaderExamPage: FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.headerTextBlock}>
        <div className={style.BreadcrumbsWrap}>
          <HeaderBreadcrumbs>{breadcrumbs}</HeaderBreadcrumbs>
        </div>
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
            background: theme.palette.primary.main,
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
