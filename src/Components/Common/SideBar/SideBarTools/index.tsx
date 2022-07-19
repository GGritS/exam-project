import React, { FC } from "react";
import { SideBarAvatar } from "../SideBarAvatar";
import { SideBarItem } from "../SideBarItem";
import { SideBarItem as SideBarItemType } from "../types";
import style from "./index.module.scss";

const sideBarItems: SideBarItemType[] = [
  {
    pk: 0,
    image: "https://file.rendit.io/n/8SuSgQDm9XVQwfVaq3JI.svg",
    isActive: false,
    notificationsCount: 307,
  },
  {
    pk: 1,
    image: "https://file.rendit.io/n/R1tdFvDGgxa2LQuvuDcb.svg",
    isActive: false,
    notificationsCount: 0,
  },
];

export const SideBarTools: FC = () => {
  return (
    <div>
      {sideBarItems.map((sideItem) => (
        <div className={style.sidebarToolWrap} style={{ marginBottom: "12px" }}>
          <SideBarItem {...sideItem} key={sideItem.pk} />
        </div>
      ))}
      <SideBarAvatar />
    </div>
  );
};
