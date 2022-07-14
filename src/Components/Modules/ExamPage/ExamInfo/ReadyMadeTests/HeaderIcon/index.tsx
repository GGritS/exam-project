import React, { FC, ReactNode } from "react";

import style from "./index.module.scss";

interface HeaderIconProps {
  children?: ReactNode;
  onClick?: () => void;
}

const HeaderIcon: FC<HeaderIconProps> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={style.wrapper}>
      {children}
    </div>
  );
};

export default HeaderIcon;
