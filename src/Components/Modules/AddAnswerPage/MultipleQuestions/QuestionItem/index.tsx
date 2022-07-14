import React, { ChangeEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../Redux/hook";
import { handleMultipleQuestionChange } from "../../../../../Redux/TestSlice/TestSlice";

import { SectionWithBackground } from "../../../../Common/Sections";
import { UploadImages } from "../../UploadImages";
import { UploadedImages } from "../UploadedImages";

import style from "./index.module.scss";

interface QuestionItemProps {}

export const QuestionItem: FC<QuestionItemProps> = () => {
  const dispatch = useAppDispatch();
  const { multipleQuestion } = useAppSelector((state) => state.Test.tempTest);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      handleMultipleQuestionChange({
        name: "title",
        value: e.target.value,
      })
    );
  };

  const handleImagesChange = (imageSrc: string) => {
    const image = {
      pk: multipleQuestion.images.length,
      src: imageSrc,
    };

    dispatch(
      handleMultipleQuestionChange({
        name: "images",
        value: [...multipleQuestion.images, image],
      })
    );
  };

  const handleDeleteImage = (pk: number) => {
    dispatch(
      handleMultipleQuestionChange({
        name: "images",
        value: multipleQuestion.images.filter((img) => img.pk !== pk),
      })
    );
  };

  return (
    <SectionWithBackground bgClassName={style.content}>
      <div className={style.questionLine}>
        <div className={style.questionImgWrap}>
          <img
            src="https://file.rendit.io/n/43c9e8MB3SZusKUZxvtt.png"
            alt="question img"
            className={style.questionImg}
          />
        </div>

        <input
          type="text"
          value={multipleQuestion.title}
          onChange={handleTextChange}
          className={style.questionInput}
          placeholder="Question Text..."
        />
        <UploadImages
          onChange={handleImagesChange}
          inputId={"Multiple-question"}
        />
      </div>
      {!!multipleQuestion.images.length && (
        <div className={style.imagesWrap}>
          <UploadedImages
            handleDeleteImage={handleDeleteImage}
            images={multipleQuestion.images}
          />
        </div>
      )}
    </SectionWithBackground>
  );
};
