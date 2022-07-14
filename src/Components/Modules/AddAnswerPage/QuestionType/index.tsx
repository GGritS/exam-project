import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../Redux/hook";
import { handleQuestionTypeChange } from "../../../../Redux/TestSlice/TestSlice";
import { QuestionType } from "../../../Pages/AddQuestionPage/type";

import style from "./index.module.scss";

export const SELECTED_VALUES: Record<"multiple" | "matching", QuestionType> = {
  matching: "Matching",
  multiple: "Multiple choice",
};

export const QuestionTypeInput: FC = () => {
  const dispatch = useAppDispatch();
  const { type } = useAppSelector((state) => state.Test.tempTest);

  const handleSelectChange = (e: SelectChangeEvent<QuestionType>) => {
    //@ts-ignore
    dispatch(handleQuestionTypeChange(e.target.value));
  };

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <span>1. Question Type</span>
      </div>
      <div className={style.questionTypeBlock}>
        <img
          src="https://file.rendit.io/n/nD6p5Fm7ZC2vDZX3IQLU.png"
          alt="select question"
          className={style.img}
        />
        <Select fullWidth value={type} onChange={handleSelectChange}>
          <MenuItem value={SELECTED_VALUES.multiple}>
            {SELECTED_VALUES.multiple}
          </MenuItem>
          <MenuItem value={SELECTED_VALUES.matching}>
            {SELECTED_VALUES.matching}
          </MenuItem>
        </Select>
      </div>
    </div>
  );
};
