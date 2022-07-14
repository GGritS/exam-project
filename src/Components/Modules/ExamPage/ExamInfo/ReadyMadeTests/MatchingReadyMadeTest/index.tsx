import React, { FC, useState } from "react";
import { MatchingTest } from "../../../../../../Redux/types";

import style from "./index.module.scss";
import { MatchingAnswers } from "./MatchingAnswers";
import { MatchingQuestions } from "./MatchingQuestions";

interface MatchingReadyMadeTestProps {
  readyMadeMatchingQuestion: MatchingTest;
}

export const MatchingReadyMadeTest: FC<MatchingReadyMadeTestProps> = ({
  readyMadeMatchingQuestion,
}) => {
  const [isAnswerShowed, setIsAnswerShowed] = useState<boolean>(false);

  return (
    <div className={style.wrapper}>
      <div className={style.questionWrap}>
        <MatchingQuestions
          isAnswerShowed={isAnswerShowed}
          readyMadeMatchingQuestion={readyMadeMatchingQuestion}
        />
      </div>
      {isAnswerShowed && <div className={style.line}></div>}

      {isAnswerShowed ? (
        <MatchingAnswers
          isAnswerShowed={isAnswerShowed}
          readyMadeMatchingQuestion={readyMadeMatchingQuestion}
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
