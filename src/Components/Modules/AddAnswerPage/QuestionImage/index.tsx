import { FC } from "react";

import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

import style from "./index.module.scss";

interface QuestionImageProps {
  src?: string;
  pk: number;
  onDelete: (pk: number) => void;
}

export const QuestionImage: FC<QuestionImageProps> = ({
  src,
  pk,
  onDelete,
}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.removeIconWrap} onClick={() => onDelete(pk)}>
        <DeleteTwoToneIcon sx={{ fontSize: "20px" }} />
      </div>
      {src && <img src={src} alt="question img" className={style.addedImg} />}
    </div>
  );
};
