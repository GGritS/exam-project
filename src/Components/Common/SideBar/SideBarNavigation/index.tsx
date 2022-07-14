import React, { FC } from "react";
import { SideBarItem } from "../SideBarItem";
import { SideBarItem as SideBarItemType } from "../types";

const sideBarItems: SideBarItemType[] = [
  {
    pk: 0,
    image: "https://file.rendit.io/n/8SuSgQDm9XVQwfVaq3JI.svg",
    isActive: false,
    notificationsCount: 0,
  },
  {
    pk: 1,
    image: "https://file.rendit.io/n/R1tdFvDGgxa2LQuvuDcb.svg",
    isActive: false,
    notificationsCount: 0,
  },
  {
    pk: 2,
    image: "https://file.rendit.io/n/4q32hglG5Q1Mp4iEPsWi.svg",
    isActive: false,
    notificationsCount: 0,
  },
  {
    pk: 3,
    image: "https://file.rendit.io/n/XNIM3yz9pmlixad7v9O6.svg",
    isActive: false,
    notificationsCount: 0,
  },
  {
    pk: 4,
    image: "https://file.rendit.io/n/t2MPCZg7PeXCV26AIZM0.svg",
    isActive: false,
    notificationsCount: 0,
  },
  {
    pk: 5,
    image: "https://file.rendit.io/n/h0VH0PrmM5ezEuQdCver.svg",
    isActive: true,
    notificationsCount: 0,
  },
  {
    pk: 6,
    image: "https://file.rendit.io/n/lO5iZpisBtSfOpmCS3O4.svg",
    isActive: false,
    notificationsCount: 0,
  },
];

export const SideBarNavigation: FC = () => {
  return (
    <div>
      {sideBarItems.map((sideItem) => (
        <SideBarItem {...sideItem} key={sideItem.pk} />
      ))}
    </div>
  );
};
