import React from "react";
import { Route } from "react-router-dom";
// import { Home } from "../Notes";
import { Notes } from "../Notes/Notes";
import { Login } from "../Login/Login";
import { IncomeExpenseAdd } from "../IncomeExpense/IncomeExpenseAdd";
import { IncomeExpenseEditDelete } from "../IncomeExpense/IncomeExpenseEditDelete";
import { Budgets } from "../Budgets/Budgets";
import { SavingsAdd } from "../Savings/SavingsAdd";
import { SavingsEditDelete } from "../Savings/SavingsEditDelete";
import { DebtAdd } from "../Debt/DebtAdd";
import { DebtEditDelete } from "../Debt/DebtEditDelete";
import { NotesAdd } from "../Notes/NotesAdd";
import { NotesEditDelete } from "../Notes/NotesEditDelete";
import { Dashboard } from "../Dashboard/Dashboard";

export const Routes = () => {
  return (
    <>
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/notes" component={Notes} />
      <Route path="/IncomeExpenseAdd" component={IncomeExpenseAdd} />
      <Route
        path="/IncomeExpenseEditDelete"
        component={IncomeExpenseEditDelete}
      />
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
