import React from "react";
import { Route } from "react-router-dom";
// import { Home } from "../Notes";
import { Notes } from "../Notes";
import { Login } from "../Login";
import { IncomeExpenseAdd } from "../IncomeExpenseAdd";
import { IncomeExpenseEditDelete } from "../IncomeExpenseEditDelete";
import { Budgets } from "../Budgets";
import { SavingsAdd } from "../SavingsAdd";
import { SavingsEditDelete } from "../SavingsEditDelete"; 

export const Routes = () => {
  return (
    <>
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/" component={Login} />
      <Route path="/notes" component={Notes} />
      <Route path="/IncomeExpenseAdd" component={IncomeExpenseAdd} />
      <Route path="/IncomeExpenseEditDelete" component={IncomeExpenseEditDelete} />
      <Route path="/Budgets" component={Budgets} />
      <Route path="/SavingsAdd" component={SavingsAdd} />
      <Route path="/SavingsEditDelete" component={SavingsEditDelete} />
    </>
  );
};
