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
import { DebtAdd } from "../DebtAdd";
import { DebtEditDelete } from "../DebtEditDelete";
import { NotesAdd } from "../NotesAdd";
import { NotesEditDelete } from "../NotesEditDelete";

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
      <Route path="/DebtAdd" component={DebtAdd} />
      <Route path="/DebtEditDelete" component={DebtEditDelete} />
      <Route path="/NotesAdd" component={NotesAdd} />
      <Route path="/NotesEditDelete" component={NotesEditDelete} />
    </>
  );
};
