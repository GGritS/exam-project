import { ChangeEvent, FC } from "react";

import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import { SectionWithBackground } from "../../../../Common/Sections";
import { UploadImages } from "../../UploadImages";

import style from "./index.module.scss";
import { UploadedImages } from "../UploadedImages";
import { MultipleAnswer } from "../../../../../Redux/types";
import { useAppDispatch } from "../../../../../Redux/hook";
import { handleMultipleAnswerChange } from "../../../../../Redux/TestSlice/TestSlice";

interface AnswerItemProps {
  answer: MultipleAnswer;
}

export const AnswerItem: FC<AnswerItemProps> = ({ answer }) => {
  const dispatch = useAppDispatch();

  const handleChangeCorrect = () => {
    const changedAnswer: MultipleAnswer = {
      ...answer,
      isCorrect: !answer.isCorrect,
    };

    dispatch(handleMultipleAnswerChange(changedAnswer));
  };

  const handleUploadImage = (imageSrc: string) => {
    let changedAnswer: MultipleAnswer = {
      ...answer,
      images: [...answer.images, { pk: answer.images.length, src: imageSrc }],
    };

    dispatch(handleMultipleAnswerChange(changedAnswer));
  };

  const changeAnswerText = (event: ChangeEvent<HTMLInputElement>) => {
    const changedAnswer: MultipleAnswer = {
      ...answer,
      title: event.target.value,
    };
    dispatch(handleMultipleAnswerChange(changedAnswer));
  };

  const handleDeleteImage = (pk: number) => {
    const validImages = answer.images || [];
    let changedAnswer: MultipleAnswer = {
      ...answer,
      images: [...validImages.filter((img) => img.pk !== pk)],
    };

    dispatch(handleMultipleAnswerChange(changedAnswer));
  };

  return (
    <div className={style.wrapper}>
      <SectionWithBackground
        withGreenBorder={answer.isCorrect}
        headerStyles={style.header}
        title={answer.pk === 0 ? "3.Answers" : ""}
        titleHint={answer.pk === 0 ? "(please tick the correct answers)" : ""}
      >
        <div className={style.questionLine}>
          <div className={style.checkBoxWrap}>
            <input
              type="checkbox"
              checked={answer.isCorrect}
              onChange={handleChangeCorrect}
              className={style.checkBox}
            />
          </div>

          <input
            type="text"
            value={answer.title}
            onChange={changeAnswerText}
            className={style.questionInput}
            placeholder="Question Text..."
          />
          <UploadImages
            onChange={handleUploadImage}
            inputId={`Multiple-answer-${answer.pk}`}
          />
        </div>
        {!!answer.images?.length && (
          <UploadedImages
            images={answer.images}
            handleDeleteImage={handleDeleteImage}
          />
        )}
      </SectionWithBackground>
      {answer.isCorrect && (
        <div className={style.writeAnswerTextWrap}>
          <CheckTwoToneIcon
            sx={{ color: "#285F17", fontSize: "14px", marginRight: "12px" }}
          />
          <div className={style.writeAnswerText}>Correct answer</div>
        </div>
      )}
    </div>
  );
};
