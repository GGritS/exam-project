import { IconButton } from "@mui/material";
import React, { ChangeEvent, FC } from "react";
import BrokenImageTwoToneIcon from "@mui/icons-material/BrokenImageTwoTone";

import style from "./index.module.scss";

interface UploadImagesPops {
  onChange: (image: string) => void;
  inputId: string;
}

export const UploadImages: FC<UploadImagesPops> = ({
  onChange,
  inputId = 1,
}) => {
  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? event.target.files[0] : undefined;
    if (files) {
      let reader = new FileReader();
      reader.readAsDataURL(files);

      reader.onload = () => {
        const imageSrc = reader.result ? reader.result.toString() : undefined;
        if (imageSrc) {
          onChange(imageSrc);
        }
      };
    }
  };
  return (
    <div className={style.wrapper}>
      <label htmlFor={`${inputId}`}>
        <input
          type="file"
          id={`${inputId}`}
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => uploadImage(e)}
        />
        <IconButton aria-label="upload picture" component="span">
          <BrokenImageTwoToneIcon sx={{ fontSize: "18px", color: "gray" }} />
        </IconButton>
      </label>
    </div>
  );
};
