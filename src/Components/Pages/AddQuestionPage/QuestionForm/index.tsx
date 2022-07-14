import { FC, MutableRefObject } from "react";
import { useAppSelector } from "../../../../Redux/hook";
import { QuestionState } from "../../../../Redux/types";
import { Comments } from "../../../Modules/AddAnswerPage/Comments";
import { MatchingQuestions } from "../../../Modules/AddAnswerPage/MatchingQuestions";
import { MultipleQuestions } from "../../../Modules/AddAnswerPage/MultipleQuestions";
import { PointsForQuestion } from "../../../Modules/AddAnswerPage/PointsForQuestion";
import { QuestionTypeInput } from "../../../Modules/AddAnswerPage/QuestionType";

import style from "./index.module.scss";

type QuestionFormProps = {
  outerQuestionStateRef: MutableRefObject<QuestionState>;
};

export const QuestionForm: FC<QuestionFormProps> = ({
  outerQuestionStateRef,
}) => {
  const { tempTest } = useAppSelector((state) => state.Test);

  outerQuestionStateRef.current = tempTest;

  return (
    <div className={style.content}>
      <QuestionTypeInput />

      {tempTest.type === "Multiple choice" ? (
        <MultipleQuestions />
      ) : (
        <MatchingQuestions />
      )}

      <PointsForQuestion />
      <Comments />
    </div>
  );
};
