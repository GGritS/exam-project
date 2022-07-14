import { QuestionType } from "../Components/Pages/AddQuestionPage/type";

export const SELECTED_VALUES: Record<"multiple" | "matching", QuestionType> = {
  matching: "Matching",
  multiple: "Multiple choice",
};

export type Image = {
  pk: number;
  src: string;
};

export type MultipleQuestion = {
  title: string;
  images: Image[];
};

export type MatchingQuestion = {
  pk: number;
  title: {
    text: string;
    images: Image[];
  };
  answer: {
    text: string;
    images: Image[];
  };
};

export type QuestionState = {
  pk: number;
  type: QuestionType;
  comment: string;
  points: number;
  matchingQuestions: MatchingQuestion[];
  multipleQuestion: MultipleQuestion;
  multipleAnswer: MultipleAnswer[];
};

export type MultipleTitleField = {
  name: "title";
  value: string;
};

export type MultipleImagesField = {
  name: "images";
  value: Image[];
};

export type MultipleAnswer = {
  pk: number;
  title: string;
  images: Image[];
  isCorrect: boolean;
};

export type MultipleQuestionFieldChange =
  | MultipleTitleField
  | MultipleImagesField;

export type MultipleType = "Multiple choice";
export type MatchingType = "Matching";

export type MultipleTest = {
  pk: number;
  type: MultipleType;
  question: MultipleQuestion;
  answer: MultipleAnswer[];
  points: number;
  comment?: string;
};

export type MatchingTest = {
  pk: number;
  type: MatchingType;
  questions: MatchingQuestion[];
  points: number;
  comment?: string;
};

export type Question = MultipleTest | MatchingTest;
