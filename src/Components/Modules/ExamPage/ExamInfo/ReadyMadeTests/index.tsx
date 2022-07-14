import React from "react";
import { useAppSelector } from "../../../../../Redux/hook";

import style from "./index.module.scss";
import { ReadyMadeTest } from "./ReadyMadeTest";

export const ReadyMadeTests = () => {
  const { Tests } = useAppSelector((state) => state.Test);
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.questionHeaderTextLattice}>#</div>
        <div className={style.questionHeaderTextQuestion}>Question</div>
        <div className={style.questionHeaderTextStandart}>Standart</div>
        <div className={style.questionHeaderTextActions}>Actions</div>
        <div className={style.scrollSpace}></div>
      </div>
      <div className={style.content}>
        <div className={style.ReadyMadeTestContentWrap}>
          {Tests.map((test) => (
            <ReadyMadeTest readyMadeQuestion={{ ...test }} key={test.pk} />
          ))}
        </div>
      </div>
    </div>
  );
};
