import { Button } from "@mui/material";
import React, { FC } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

import style from "./index.module.scss";
import { ExamCategoryItem } from "./ExamCategoryItem";
import { useAppSelector } from "../../../../Redux/hook";
import { ReadyMadeTests } from "./ReadyMadeTests";

interface ExamInfoProps {
  grade: string;
  course: string;
  subject: string;
  time: string;
}

export const ExamInfo: FC<ExamInfoProps> = ({
  grade,
  course,
  subject,
  time,
}) => {
  const { Tests } = useAppSelector((state) => state.Test);

  return (
    <div className={style.wrapper}>
      <div className={style.examInfoBlock}>
        <div className={style.examCategory}>
          <ExamCategoryItem
            name={grade}
            img="https://file.rendit.io/n/5qpXKSQbmS85Fn2PNKMp.png"
            title="Grade"
          />

          <ExamCategoryItem
            name={subject}
            img="https://file.rendit.io/n/15qtGm3LkhOsdsiSh7oa.png"
            title="Science"
          />
        </div>
        <div className={style.examCourseAndTime}>
          <ExamCategoryItem
            img="https://file.rendit.io/n/YWhSJMxXPs77RsFCq6v2.png"
            title="Course"
            name={course}
          />
          <div className={style.line}></div>
          <ExamCategoryItem
            img="https://file.rendit.io/n/xwERMjgGUb80PbPe7weG.png"
            title="Amount of Time to Complete the Exam"
            name={time}
          />
        </div>
      </div>
      <div className={style.questionInfo}>
        <span>Questions ({Tests.length})</span>
        <Link to="/AddQuestionPage" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#4282AA",
              borderColor: "#4282AA",
            }}
          >
            <AddIcon
              sx={{ fontSize: 14, marginRight: "10px", color: "#4282AA" }}
            />
            Add question
          </Button>
        </Link>
      </div>
      {!!Tests.length && (
        <div className={style.readyMadeTests}>
          <ReadyMadeTests />
        </div>
      )}
    </div>
  );
};
