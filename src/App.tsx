import React from "react";
import "./App.scss";

import { SideBar } from "./Components/Common/SideBar";
import Root from "./Components/Root";

function App() {
  return (
    <div className="wrapper">
      <SideBar />
      <Root />
    </div>
  );
}

export default App;
