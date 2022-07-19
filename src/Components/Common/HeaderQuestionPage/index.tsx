import { Button, Link as LinkMUI, Typography } from "@mui/material";
import React, { FC } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";

import style from "./index.module.scss";
import { useAppDispatch, useAppSelector } from "../../../Redux/hook";
import { saveTest } from "../../../Redux/TestSlice/TestSlice";
import { Link } from "react-router-dom";
import { HeaderBreadcrumbs } from "../HeaderBreadcrumbs";
import { theme } from "../../../theme";

const breadcrumbs = [
  <LinkMUI
    underline="hover"
    key="1"
    href="/"
    className={style.breadcrumbsTitle}
  >
    <img
      src="https://file.rendit.io/n/FusVMCUEkxXJnIyg7K9j.svg"
      alt="img"
      className={style.breadcrumbsImg}
    />
    <div className={style.breadcrumbsText}>Exams</div>
  </LinkMUI>,
  <LinkMUI underline="hover" key="2" href="/">
    <div className={style.breadcrumbsText}>New Exam Title Here</div>
  </LinkMUI>,
  <Typography key="2">
    <div className={style.breadcrumbsText}>New Question</div>
  </Typography>,
];

export const HeaderQuestionPage: FC = () => {
  const { tempTest } = useAppSelector((state) => state.Test);

  const dispatch = useAppDispatch();

  const submitFrom = () => {
    dispatch(saveTest(tempTest));
  };

  return (
    <div className={style.wrapper}>
      <div className={style.headerTextBlock}>
        <div className={style.BreadcrumbsWrap}>
          <HeaderBreadcrumbs>{breadcrumbs}</HeaderBreadcrumbs>
        </div>
        <div className={style.pageTitle}>Add Question</div>
      </div>
      <div className={style.headerButtonsBlock}>
        <Button
          variant="text"
          sx={{ textTransform: "none", color: "#777777", marginRight: "30px" }}
        >
          <CloseIcon
            sx={{ fontSize: 17, color: "#777777", marginRight: "10px" }}
          />
          Delete Question
        </Button>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            onClick={submitFrom}
            variant="contained"
            sx={{
              textTransform: "none",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "140%",
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <CheckCircleOutlineIcon
              sx={{ fontSize: "12px", marginRight: "10px" }}
            />
            Save Question
          </Button>
        </Link>
      </div>
    </div>
  );
};
