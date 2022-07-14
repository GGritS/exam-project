import React, { FC, useEffect, useState } from "react";
import { HeaderExamPage } from "../../Common/HeaderExamPage";
import { ExamInfo } from "../../Modules/ExamPage/ExamInfo";
import { SchoolsList } from "../../Modules/ExamPage/SchoolsList";
import io from "socket.io-client";

type Data = {
  schools: string[];
  grade: string;
  course: string;
  subject: string;
  time: string;
};

const socket = io("wss://front-test-sockets.herokuapp.com");

export const ExamPage: FC = () => {
  const [state, setState] = useState<Data>({
    grade: "",
    course: "",
    schools: [""],
    subject: "",
    time: "",
  });

  useEffect(() => {
    socket.emit("get data");
    socket.on("data", (data) => {
      if (state.grade.length === 0) setState(data);
    });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "64px",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <HeaderExamPage />
      <div
        style={{
          display: "flex",
          height: "820px",
        }}
      >
        <ExamInfo
          course={state.course}
          grade={state.grade}
          subject={state.subject}
          time={state.time}
        />
        <SchoolsList schools={state.schools} />
      </div>
    </div>
  );
};
