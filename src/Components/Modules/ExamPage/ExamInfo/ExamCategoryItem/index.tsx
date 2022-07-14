import React, { FC } from "react";

import style from "./index.module.scss";

interface ExamCategoryItemProps {
  title: string;
  img: string;
  name: string;
}

export const ExamCategoryItem: FC<ExamCategoryItemProps> = ({
  title,
  img,
  name,
}) => {
  return (
    <div className={style.wrapper}>
      <img src={img} alt="hatImg" className={style.examCategoryItemImg} />
      <div className={style.textBlock}>
        <div className={style.categoryTitle}>{title}</div>
        <div className={style.categoryName}>{name}</div>
      </div>
    </div>
  );
};
