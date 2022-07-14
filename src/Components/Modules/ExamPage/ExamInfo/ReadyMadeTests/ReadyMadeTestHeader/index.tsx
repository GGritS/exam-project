import React, { FC } from "react";
import HeaderIcon from "../HeaderIcon";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";

import style from "./index.module.scss";
import cn from "classnames";
import { useAppDispatch } from "../../../../../../Redux/hook";
import { removeTest } from "../../../../../../Redux/TestSlice/TestSlice";

interface ReadyMadeTestHeaderProps {
  title: string;
  pk: number;
}

export const ReadyMadeTestHeader: FC<ReadyMadeTestHeaderProps> = ({
  title,
  pk,
}) => {
  const dispatch = useAppDispatch();

  const handleRemoveTest = () => {
    dispatch(removeTest(pk));
  };

  return (
    <div className={style.wrapper}>
      <div className={style.questionHeaderTextLattice}>1</div>
      <div className={style.questionHeaderTextQuestion}>
        <div
          className={cn(style.questionHeaderTextQuestionItem, {
            [style.multiple]: title === "Multiple choice",
            [style.matching]: title === "Matching",
          })}
        >
          {title}
        </div>
      </div>
      <div className={style.questionHeaderTextStandart}>7B</div>
      <div className={style.questionHeaderTextActions}>
        <HeaderIcon onClick={handleRemoveTest}>
          <DeleteTwoToneIcon sx={{ fontSize: "12px" }} />
        </HeaderIcon>
        <HeaderIcon>
          <EditTwoToneIcon sx={{ fontSize: "12px" }} />
        </HeaderIcon>
      </div>
    </div>
  );
};
