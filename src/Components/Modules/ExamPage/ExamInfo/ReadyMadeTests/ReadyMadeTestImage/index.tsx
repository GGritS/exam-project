import React, { FC } from "react";

import style from "./index.module.scss";

interface ReadyMadeTestImageProps {
  src: string;
}

const ReadyMadeTestImage: FC<ReadyMadeTestImageProps> = ({ src }) => {
  return <img src={src} alt="image" className={style.img} />;
};

export default ReadyMadeTestImage;
