import AddQuestionPage from "../Components/Pages/AddQuestionPage";
import { ExamPage } from "../Components/Pages/ExamPage";

type Route = {
  name: string;
  path: string;
  element: JSX.Element;
};

export const routes: Route[] = [
  {
    name: "home",
    path: "/",
    element: <ExamPage />,
  },
  {
    name: "questions",
    path: "/AddQuestionPage",
    element: <AddQuestionPage />,
  },
];
