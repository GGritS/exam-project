import React, { FC } from "react";
import {
  Image,
  MatchingQuestion,
  MatchingTest,
  MultipleAnswer,
} from "../../../../../../../Redux/types";
import ReadyMadeTestImage from "../../ReadyMadeTestImage";

import style from "./index.module.scss";

interface MatchingQuestionsProps {
  isAnswerShowed: boolean;
  readyMadeMatchingQuestion: MatchingTest;
}

export const MatchingQuestions: FC<MatchingQuestionsProps> = ({
  readyMadeMatchingQuestion,
}) => {
  return (
    <div className={style.answersList}>
      {readyMadeMatchingQuestion.questions.map(
        (questions: MatchingQuestion) => (
          <div className={style.answerWrap} key={questions.pk}>
            <span className={style.answerText}>
              <span>{questions.pk + 1}. </span>
              {questions.title.text}
            </span>
            <div className={style.imageWrap}>
              {!!questions.title.images.length &&
                questions.title.images.map((image: Image) => (
                  <ReadyMadeTestImage src={image.src} key={image.pk} />
                ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};
