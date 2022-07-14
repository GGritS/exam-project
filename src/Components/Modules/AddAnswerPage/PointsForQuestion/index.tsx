import { FC } from "react";

import { Button } from "@mui/material";

import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";

import style from "./index.module.scss";
import { useAppSelector } from "../../../../Redux/hook";

export const PointsForQuestion: FC = () => {
  const { type } = useAppSelector((state) => state.Test.tempTest);
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <span>{type === "Multiple choice" ? "4." : "3."} Points</span>
      </div>
      <div className={style.pointsAndTextBlock}>
        <img
          src="https://file.rendit.io/n/xzM8oYOTLOVIRZ9CW8wx.png"
          alt="points"
          className={style.pointsImg}
        />
        <span>point for the right answer</span>
      </div>
      <Button
        variant="outlined"
        sx={{
          textTransform: "none",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "140%",
        }}
      >
        <EditTwoToneIcon sx={{ fontSize: "15px", marginRight: "10px" }} />
        <span>Change</span>
      </Button>
    </div>
  );
};
