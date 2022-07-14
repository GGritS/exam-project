import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../Redux/hook";
import { handleMultipleAnswerChange } from "../../../../Redux/TestSlice/TestSlice";
import { MultipleAnswer } from "../../../../Redux/types";
import { SectionWithBackground } from "../../../Common/Sections";
import { AddAnswer } from "./AddAnswer";
import { AnswerItem } from "./AnswerItem";

import { QuestionItem } from "./QuestionItem";

export const MultipleQuestions: FC = () => {
  const dispatch = useAppDispatch();
  const { multipleAnswer } = useAppSelector((state) => state.Test.tempTest);

  const handleAddAnswerClick = () => {
    const answer: MultipleAnswer = {
      isCorrect: false,
      pk: multipleAnswer.length,
      title: "",
      images: [],
    };
    dispatch(handleMultipleAnswerChange(answer));
  };

  return (
    <SectionWithBackground title="2. Question" withoutBgColor>
      <QuestionItem />
      {multipleAnswer.map((answer) => (
        <AnswerItem answer={answer} key={answer.pk} />
      ))}
      <AddAnswer onAddAnswerClick={handleAddAnswerClick} />
    </SectionWithBackground>
  );
};
