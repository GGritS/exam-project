import { FC } from "react";
import { useAppSelector } from "../../../../Redux/hook";
import { MatchingQuestion } from "../../../../Redux/types";
import { SectionWithBackground } from "../../../Common/Sections";

import style from "./index.module.scss";
import { MatchingItem } from "./MatchingItem";

export const MatchingQuestions: FC = () => {
  const { matchingQuestions } = useAppSelector((state) => state.Test.tempTest);

  return (
    <SectionWithBackground title="2. Question / Answer" bgClassName={style.bg}>
      <div className={style.wrapper}>
        <table className={style.content}>
          <tr className={style.rowsWrap}>
            <th className={style.rowsItem}>Answer</th>
            <th className={style.rowsItem}>Question</th>
          </tr>
          {matchingQuestions.map((question: MatchingQuestion) => (
            <MatchingItem key={question.pk} matchingTest={{ ...question }} />
          ))}
        </table>
      </div>
    </SectionWithBackground>
  );
};
