import React from "react";
import { Route } from "react-router-dom";
import { Home } from "../Home";

export const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
    </>
  );
};
