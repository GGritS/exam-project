import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../../routes";

const Root = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route path={route.path} element={route.element} key={index} />
      ))}
    </Routes>
  );
};

export default Root;
