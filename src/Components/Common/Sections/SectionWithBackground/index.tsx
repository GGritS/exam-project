import React, { FC, ReactNode } from "react";
import { ClassNames } from "../../../../Types/common";
import cn from "classnames";

import style from "./index.module.scss";

type SectionWithBackgroundProps = ClassNames & {
  children: ReactNode;
  title?: string;
  titleHint?: string;

  bgClassName?: string;
  headerStyles?: string;
  withGreenBorder?: boolean;
  withoutBgColor?: boolean;
};

export const SectionWithBackground: FC<SectionWithBackgroundProps> = ({
  children,
  title,
  titleHint,
  className,
  bgClassName,
  headerStyles,
  withGreenBorder = false,
  withoutBgColor = false,
}) => {
  const backgroundModifiers = {
    [style.withGreenBorder]: withGreenBorder,
    [style.withoutBgColor]: withoutBgColor,
  };

  return (
    <div className={cn(style.wrapper, className)}>
      {title && (
        <div className={cn(style.title, headerStyles)}>
          {title} <p className={style.titleHint}>{titleHint}</p>
        </div>
      )}
      <div
        className={cn(
          style.roundedBackground,
          bgClassName,
          backgroundModifiers
        )}
      >
        {children}
      </div>
    </div>
  );
};
