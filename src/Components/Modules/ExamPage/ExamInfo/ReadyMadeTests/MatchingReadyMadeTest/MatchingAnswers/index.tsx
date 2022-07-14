import React, { FC } from "react";
import {
  Image,
  MatchingQuestion,
  MatchingTest,
  MultipleAnswer,
} from "../../../../../../../Redux/types";
import ReadyMadeTestImage from "../../ReadyMadeTestImage";

import style from "./index.module.scss";

interface MatchingAnswersProps {
  isAnswerShowed: boolean;
  readyMadeMatchingQuestion: MatchingTest;
}

export const MatchingAnswers: FC<MatchingAnswersProps> = ({
  readyMadeMatchingQuestion,
}) => {
  return (
    <div className={style.answersList}>
      <span className={style.answer}>Answer(s)</span>
      {readyMadeMatchingQuestion.questions.map(
        (questions: MatchingQuestion) => (
          <div className={style.answerWrap} key={questions.pk}>
            <span className={style.answerText}>
              <span>{questions.pk + 1}. </span>
              {questions.answer.text}
            </span>
            <div className={style.imageWrap}>
              {!!questions.answer.images.length &&
                questions.answer.images.map((image: Image) => (
                  <ReadyMadeTestImage src={image.src} key={image.pk} />
                ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};
