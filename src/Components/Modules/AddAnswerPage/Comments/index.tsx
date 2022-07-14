import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../Redux/hook";
import { changeComment } from "../../../../Redux/TestSlice/TestSlice";
import { QuestionType } from "../../../Pages/AddQuestionPage/type";

import style from "./index.module.scss";

export const Comments: FC = ({}) => {
  const dispatch = useAppDispatch();
  const { type } = useAppSelector((state) => state.Test.tempTest);
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <span>{type === "Multiple choice" ? "5." : "4."} Comments</span>
      </div>
      <div className={style.commentsBlock}>
        <img
          src="https://file.rendit.io/n/HMN9Ls1yRF6HovpKh6f8.png"
          alt="note"
          className={style.img}
        />
        <textarea
          name="comment"
          onChange={(e) => dispatch(changeComment(e.target.value))}
          className={style.textArea}
          placeholder="Teacher comment..."
        ></textarea>
      </div>
    </div>
  );
};
