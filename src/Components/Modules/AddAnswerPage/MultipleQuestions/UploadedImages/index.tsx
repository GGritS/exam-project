import React, { FC } from "react";
import { Image } from "../../../../../Redux/types";
import { UploadedImage } from "../../../Types";
import { QuestionImage } from "../../QuestionImage";

import style from "./index.module.scss";

interface UploadedImagesPops {
  images: Image[];
  handleDeleteImage: (pk: number) => void;
}

export const UploadedImages: FC<UploadedImagesPops> = ({
  images,
  handleDeleteImage,
}) => {
  return (
    <div className={style.wrapper}>
      {images.map((image, index) => (
        <QuestionImage
          onDelete={handleDeleteImage}
          src={image.src}
          key={index}
          pk={image.pk}
        />
      ))}
    </div>
  );
};
