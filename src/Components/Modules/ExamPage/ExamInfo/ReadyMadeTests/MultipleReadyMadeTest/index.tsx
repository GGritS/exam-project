import React, { FC, useState } from "react";
import {
  Image,
  MultipleAnswer,
  MultipleTest,
} from "../../../../../../Redux/types";
import ReadyMadeTestImage from "../ReadyMadeTestImage";

import style from "./index.module.scss";
import { MultipleAnswers } from "./MultipleAnswers";

interface MultipleReadyMadeTestProps {
  readyMadeMultipleQuestion: MultipleTest;
}

export const MultipleReadyMadeTest: FC<MultipleReadyMadeTestProps> = ({
  readyMadeMultipleQuestion,
}) => {
  const [isAnswerShowed, setIsAnswerShowed] = useState<boolean>(false);

  return (
    <div className={style.wrapper}>
      <div className={style.questionWrap}>
        <div className={style.questionText}>
          {readyMadeMultipleQuestion.question.title}
        </div>
        {readyMadeMultipleQuestion.question.images && (
          <div className={style.imageWrap}>
            {readyMadeMultipleQuestion.question.images.map((image: Image) => (
              <ReadyMadeTestImage src={image.src} key={image.pk} />
            ))}
          </div>
        )}
      </div>
      {isAnswerShowed && <div className={style.line}></div>}

      {isAnswerShowed ? (
        <MultipleAnswers
          isAnswerShowed={isAnswerShowed}
          readyMadeMultipleQuestion={readyMadeMultipleQuestion}
        />
      ) : (
        ""
      )}

      {isAnswerShowed ? (
        <div
          className={style.showHideAnswer}
          onClick={() => setIsAnswerShowed(false)}
        >
          Hide Answer(s)
        </div>
      ) : (
        <div
          className={style.showHideAnswer}
          onClick={() => setIsAnswerShowed(true)}
        >
          Show Answer(s)
        </div>
      )}
    </div>
  );
};
