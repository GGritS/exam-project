import { FC, useRef } from "react";

import style from "./index.module.scss";
import { HeaderQuestionPage } from "../../Common/HeaderQuestionPage";
import { QuestionForm } from "./QuestionForm";
import { QuestionState } from "../../../Redux/types";

const AddQuestionPage: FC = () => {
  const outerQuestionStateRef = useRef<QuestionState>({} as QuestionState);

  return (
    <div className={style.wrapper}>
      <HeaderQuestionPage />
      <QuestionForm outerQuestionStateRef={outerQuestionStateRef} />
    </div>
  );
};

export default AddQuestionPage;
