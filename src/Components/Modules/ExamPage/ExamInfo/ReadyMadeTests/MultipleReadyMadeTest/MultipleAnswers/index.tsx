import React, { FC } from "react";
import {
  Image,
  MultipleAnswer,
  MultipleTest,
} from "../../../../../../../Redux/types";
import ReadyMadeTestImage from "../../ReadyMadeTestImage";

import style from "./index.module.scss";

interface MultipleAnswersProps {
  isAnswerShowed: boolean;
  readyMadeMultipleQuestion: MultipleTest;
}

export const MultipleAnswers: FC<MultipleAnswersProps> = ({
  readyMadeMultipleQuestion,
  isAnswerShowed,
}) => {
  return (
    <div className={style.answersList}>
      <span className={style.answer}>Answer(s)</span>
      {readyMadeMultipleQuestion.answer.map((answer: MultipleAnswer) => (
        <div className={style.answerWrap} key={answer.pk}>
          <span className={style.answerText}>
            <span>{answer.pk + 1}. </span>
            {answer.title}
          </span>
          <div className={style.imageWrap}>
            {!!answer.images.length &&
              answer.images.map((image: Image) => (
                <ReadyMadeTestImage src={image.src} key={image.pk} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
