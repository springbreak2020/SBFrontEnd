import React from "react";
import { Route } from "react-router-dom";
import { Home } from "../Home";
import { Login } from "../Login"

export const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path= "/Login" component={Login} /> 
    </>
  );
};
