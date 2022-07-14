import { QuestionType } from "./AddQuestionPage/type.d";

export type AddQuestionPageConfig = {
  baseQuestionType: QuestionType;
};

export const config: AddQuestionPageConfig = {
  baseQuestionType: "Multiple choice",
};
