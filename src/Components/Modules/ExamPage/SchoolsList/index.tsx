import { Button, InputAdornment, OutlinedInput } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import style from "./index.module.scss";
import { SchoolItem } from "./SchoolItem";

interface SchoolsListProps {
  schools: string[];
}

export const SchoolsList: FC<SchoolsListProps> = ({ schools }) => {
  const [schoolsData, setSchoolsData] = useState<string[]>([]);

  useEffect(() => {
    setSchoolsData(schools);
  }, [schools]);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <img
          src="https://file.rendit.io/n/8YkkjPt37IagmVWZFCZM.png"
          alt="teacher icon"
          className={style.titleImg}
        />
        <span>Assigned Teachers</span>
      </div>
      <div className={style.searchLine}>
        <OutlinedInput
          sx={{ width: "100%", height: "38px" }}
          id="outlined-adornment-weight"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: "12px" }} />
            </InputAdornment>
          }
        />
      </div>
      <div className={style.schoolLists}>
        <SchoolItem name="All School" dropDownList={false} />
        {schoolsData.map((school, index) => (
          <SchoolItem name={school} dropDownList={true} key={index} />
        ))}
      </div>
      <Button
        variant="outlined"
        sx={{
          marginTop: "26px",
          paddingTop: "12px",
          paddingBottom: "12px",
          textTransform: "none",
          width: "100%",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "150%",
          color: "#4282AA",
          alignItems: "center",
        }}
      >
        Assign To Class
      </Button>
    </div>
  );
};
