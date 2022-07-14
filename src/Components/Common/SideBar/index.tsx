import React, { FC } from "react";

import style from "./index.module.scss";
import { SideBarNavigation } from "./SideBarNavigation";
import { SideBarTools } from "./SideBarTools";

export const SideBar: FC = () => {
  return (
    <div className={style.wrapper}>
      <SideBarNavigation />

      <SideBarTools />
    </div>
  );
};
