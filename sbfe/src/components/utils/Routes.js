import React from "react";
import { Route } from "react-router-dom";
// import { Home } from "../Notes";
import { Notes } from "../Notes";
import { Login } from "../Login"

export const Routes = () => {
  return (
    <>
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path= "/" component={Login} /> 
      <Route path= "/notes" component={Notes} />
    </>
  );
};
