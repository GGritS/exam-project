import { TextareaAutosize } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { useAppDispatch } from "../../../../../Redux/hook";
import { handleMatchingQuestionChange } from "../../../../../Redux/TestSlice/TestSlice";
import { MatchingQuestion } from "../../../../../Redux/types";
import { UploadImages } from "../../UploadImages";
import { UploadedMatchingImages } from "../UploadedMatchingImages";

import style from "./index.module.scss";

interface MatchingItemProps {
  matchingTest: MatchingQuestion;
}

export const MatchingItem: FC<MatchingItemProps> = ({ matchingTest }) => {
  const dispatch = useAppDispatch();

  const handleQuestionTextAreaChange = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    const changedQuestion: MatchingQuestion = {
      ...matchingTest,
      title: {
        ...matchingTest.title,
        text: e.target.value,
      },
    };
    dispatch(handleMatchingQuestionChange(changedQuestion));
  };
  const handleAnswerTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const changedQuestion: MatchingQuestion = {
      ...matchingTest,
      answer: {
        ...matchingTest.answer,
        text: e.target.value,
      },
    };
    dispatch(handleMatchingQuestionChange(changedQuestion));
  };

  const handleUploadQuestionImage = (imageSrc: string) => {
    const changedQuestion: MatchingQuestion = {
      ...matchingTest,
      title: {
        ...matchingTest.title,
        images: [
          ...matchingTest.title.images,
          { pk: matchingTest.title.images.length, src: imageSrc },
        ],
      },
    };
    dispatch(handleMatchingQuestionChange(changedQuestion));
  };

  const handleUploadAnswerImage = (imageSrc: string) => {
    const changedQuestion: MatchingQuestion = {
      ...matchingTest,
      answer: {
        ...matchingTest.answer,
        images: [
          ...matchingTest.answer.images,
          { pk: matchingTest.answer.images.length, src: imageSrc },
        ],
      },
    };
    dispatch(handleMatchingQuestionChange(changedQuestion));
  };

  const handleDeleteMatchingQuestionImage = (pk: number) => {
    let changedMatchingTest: MatchingQuestion = {
      ...matchingTest,
      title: {
        ...matchingTest.title,
        images: [...matchingTest.title.images.filter((img) => img.pk !== pk)],
      },
    };

    dispatch(handleMatchingQuestionChange(changedMatchingTest));
  };

  const handleDeleteMatchingAnswerImage = (pk: number) => {
    let changedMatchingTest: MatchingQuestion = {
      ...matchingTest,
      answer: {
        ...matchingTest.answer,
        images: [...matchingTest.answer.images.filter((img) => img.pk !== pk)],
      },
    };

    dispatch(handleMatchingQuestionChange(changedMatchingTest));
  };

  return (
    <tr className={style.rowsWrap}>
      <th className={style.rowsItem}>
        <div className={style.textAreaLine}>
          <div className={style.numbering}>{matchingTest.pk + 1}.</div>
          <TextareaAutosize
            value={matchingTest.title.text}
            onChange={handleQuestionTextAreaChange}
            aria-label="empty textarea"
            placeholder="Question Text"
            className={style.rowItemTextArea}
          />
          <div className={style.uploadIconWrap}>
            <UploadImages
              inputId={`mutching-question-item-${matchingTest.pk}`}
              onChange={handleUploadQuestionImage}
            />
          </div>
        </div>
        {!!matchingTest.title.images?.length && (
          <UploadedMatchingImages
            images={matchingTest.title.images}
            handleDeleteImage={handleDeleteMatchingQuestionImage}
          />
        )}
      </th>
      <th className={style.rowsItem}>
        <div className={style.textAreaLine}>
          <TextareaAutosize
            value={matchingTest.answer.text}
            onChange={handleAnswerTextAreaChange}
            aria-label="empty textarea"
            placeholder="Answer Text"
            className={style.rowItemTextArea}
          />
          <div className={style.uploadIconWrap}>
            <UploadImages
              inputId={`mutching-answer-item-${matchingTest.pk}`}
              onChange={handleUploadAnswerImage}
            />
          </div>
        </div>
        {!!matchingTest.answer.images?.length && (
          <UploadedMatchingImages
            images={matchingTest.answer.images}
            handleDeleteImage={handleDeleteMatchingAnswerImage}
          />
        )}
      </th>
    </tr>
  );
};
