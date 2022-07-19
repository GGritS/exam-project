import React, { FC } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import style from "./index.module.scss";

interface SchoolItemProps {
  dropDownList?: boolean;
  name: string;
}

export const SchoolItem: FC<SchoolItemProps> = ({
  dropDownList = true,
  name,
}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.schoolItemText}>
        {dropDownList && (
          <ArrowRightIcon
            sx={{
              color: "#777777",
              fontSize: "13px",
              marginRight: "8px",
              // backgroundColor: "red",
            }}
          />
        )}
        <span className={style.schoolNameText}>{name}</span>
      </div>
      <input type="checkbox" />
    </div>
  );
};
