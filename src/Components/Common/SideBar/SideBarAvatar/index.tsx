import React, { FC } from "react";

import style from "./index.module.scss";

export const SideBarAvatar: FC = () => {
  return (
    <div className={style.wrapper}>
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
        alt="Avatar"
        className={style.image}
      />
    </div>
  );
};
