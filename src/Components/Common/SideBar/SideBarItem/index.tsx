import React, { FC } from "react";
import classNames from "classnames";

import style from "./index.module.scss";
import { Link } from "react-router-dom";

interface SideBarItemProps {
  isActive: boolean;
  image: string;
  notificationsCount: number;
}

export const SideBarItem: FC<SideBarItemProps> = ({
  isActive,
  notificationsCount,
  image,
}) => {
  return (
    <div
      className={classNames(style.wrapper, {
        [style.active]: isActive,
      })}
    >
      {!!notificationsCount && (
        <div className={style.notifications}>{notificationsCount}</div>
      )}
      <Link to="/">
        <img src={image} alt="sidebar item" className={style.img} />
      </Link>
    </div>
  );
};
