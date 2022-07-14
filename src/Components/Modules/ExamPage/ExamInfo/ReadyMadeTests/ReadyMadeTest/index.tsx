import React, { FC } from "react";
import { Question } from "../../../../../../Redux/types";
import { MatchingReadyMadeTest } from "../MatchingReadyMadeTest";
import { MultipleReadyMadeTest } from "../MultipleReadyMadeTest";
import { ReadyMadeTestHeader } from "../ReadyMadeTestHeader";

import style from "./index.module.scss";

interface ReadyMadeTestPops {
  readyMadeQuestion: Question;
}

export const ReadyMadeTest: FC<ReadyMadeTestPops> = ({ readyMadeQuestion }) => {
  return (
    <div className={style.wrapper}>
      <ReadyMadeTestHeader
        title={readyMadeQuestion.type}
        pk={readyMadeQuestion.pk}
      />
      <div className={style.content}>
        {readyMadeQuestion.type === "Multiple choice" ? (
          <MultipleReadyMadeTest
            readyMadeMultipleQuestion={{ ...readyMadeQuestion }}
          />
        ) : (
          <MatchingReadyMadeTest
            readyMadeMatchingQuestion={{ ...readyMadeQuestion }}
          />
        )}
      </div>
    </div>
  );
};
