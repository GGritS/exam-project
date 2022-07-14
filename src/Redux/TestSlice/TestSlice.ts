import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuestionType } from "../../Components/Pages/AddQuestionPage/type";
import { config } from "../../Components/Pages/config";
import {
  MatchingQuestion,
  MatchingTest,
  MultipleAnswer,
  MultipleQuestionFieldChange,
  MultipleTest,
  Question,
  QuestionState,
} from "../types";

type Test = {
  tempTest: QuestionState;
  Tests: Question[];
};

const initialState: Test = {
  tempTest: {
    pk: 0,
    type: config.baseQuestionType,
    comment: "",
    points: 1,
    matchingQuestions: [
      {
        pk: 0,
        answer: { text: "", images: [] },
        title: { text: "", images: [] },
      },
      {
        pk: 1,
        answer: { text: "", images: [] },
        title: { text: "", images: [] },
      },
      {
        pk: 2,
        answer: { text: "", images: [] },
        title: { text: "", images: [] },
      },
      {
        pk: 3,
        answer: { text: "", images: [] },
        title: { text: "", images: [] },
      },
    ],
    multipleQuestion: { title: "", images: [] },
    multipleAnswer: [
      { title: "", images: [], isCorrect: false, pk: 0 },
      { title: "", images: [], isCorrect: false, pk: 1 },
      { title: "", images: [], isCorrect: false, pk: 2 },
      { title: "", images: [], isCorrect: false, pk: 3 },
    ],
  },
  Tests: [],
};

const testSlice = createSlice({
  name: "testItem",
  initialState,
  reducers: {
    changeComment(state, action: PayloadAction<string>) {
      state.tempTest.comment = action.payload;
    },
    handleQuestionTypeChange(
      state,
      action: PayloadAction<QuestionType["onChange"]>
    ) {
      state.tempTest.type = action.payload;
    },
    handleMultipleQuestionChange(
      state,
      action: PayloadAction<MultipleQuestionFieldChange>
    ) {
      const { name, value } = action.payload;
      if (name === "title") state.tempTest.multipleQuestion.title = value;
      if (name === "images") state.tempTest.multipleQuestion.images = value;
    },
    handleMultipleAnswerChange(state, action: PayloadAction<MultipleAnswer>) {
      const multipleAnswersPk = state.tempTest.multipleAnswer;
      const isCreatedAnswer = multipleAnswersPk
        .map((a) => a.pk)
        .includes(action.payload.pk);

      if (isCreatedAnswer) {
        state.tempTest.multipleAnswer = [
          ...state.tempTest.multipleAnswer.map((a) =>
            a.pk === action.payload.pk ? action.payload : a
          ),
        ];
      } else {
        state.tempTest.multipleAnswer = [
          ...state.tempTest.multipleAnswer,
          action.payload,
        ];
      }
      state.tempTest.multipleAnswer[action.payload.pk] = action.payload;
    },
    handleMatchingQuestionChange(
      state,
      action: PayloadAction<MatchingQuestion>
    ) {
      const matchingPk = state.tempTest.matchingQuestions;
      const isCreatedAnswer = matchingPk
        .map((a) => a.pk)
        .includes(action.payload.pk);

      if (isCreatedAnswer) {
        state.tempTest.matchingQuestions = [
          ...state.tempTest.matchingQuestions.map((a) =>
            a.pk === action.payload.pk ? action.payload : a
          ),
        ];
      }

      state.tempTest.matchingQuestions[action.payload.pk] = action.payload;
    },
    saveTest(state, action: PayloadAction<QuestionState>) {
      const {
        comment,
        matchingQuestions,
        multipleAnswer,
        multipleQuestion,
        points,
        type,
      } = action.payload;

      const restTempTest = () => {
        const defaultTempTest: QuestionState = {
          pk: 0,
          type: config.baseQuestionType,
          comment: "",
          points: 1,
          matchingQuestions: [
            {
              pk: 0,
              answer: { text: "", images: [] },
              title: { text: "", images: [] },
            },
            {
              pk: 1,
              answer: { text: "", images: [] },
              title: { text: "", images: [] },
            },
            {
              pk: 2,
              answer: { text: "", images: [] },
              title: { text: "", images: [] },
            },
            {
              pk: 3,
              answer: { text: "", images: [] },
              title: { text: "", images: [] },
            },
          ],
          multipleQuestion: { title: "", images: [] },
          multipleAnswer: [
            { title: "", images: [], isCorrect: false, pk: 0 },
            { title: "", images: [], isCorrect: false, pk: 1 },
            { title: "", images: [], isCorrect: false, pk: 2 },
            { title: "", images: [], isCorrect: false, pk: 3 },
          ],
        };
        state.tempTest = defaultTempTest;
      };
      if (action.payload.type === "Multiple choice") {
        const test: MultipleTest = {
          pk: state.Tests.length,
          type,
          answer: multipleAnswer,
          question: multipleQuestion,
          points,
          comment,
        };
        state.Tests.push(test);
        restTempTest();
      } else {
        const test: MatchingTest = {
          pk: state.Tests.length,
          type,
          questions: matchingQuestions,
          points,
          comment,
        };
        state.Tests.push(test);
        restTempTest();
      }
    },
    removeTest(state, action: PayloadAction<number>) {
      state.Tests = state.Tests.filter(
        (question) => question.pk !== action.payload
      );
    },
  },
});

export const {
  changeComment,
  handleQuestionTypeChange,
  handleMultipleQuestionChange,
  handleMultipleAnswerChange,
  handleMatchingQuestionChange,
  saveTest,
  removeTest,
} = testSlice.actions;

export default testSlice.reducer;
