import React from "react";
import { Route } from "react-router-dom";
// import { Home } from "../Notes";
import { Login } from "../login/Login";
import { IncomeExpenseAdd } from "../incomeExpense/IncomeExpenseAdd";
import { IncomeExpenseEditDelete } from "../incomeExpense/IncomeExpenseEditDelete";
import { Budgets } from "../budgets/Budgets";
import { SavingsAdd } from "../savings/SavingsAdd";
import { SavingsEditDelete } from "../savings/SavingsEditDelete";
import { DebtAdd } from "../debt/DebtAdd";
import { DebtEditDelete } from "../debt/DebtEditDelete";
import { NotesAdd } from "../notes/NotesAdd";
import { NotesEditDelete } from "../notes/NotesEditDelete";
import { Dashboard } from "../dashboard/Dashboard";
import { DebtCard } from "../debt/DebtCard";

export const Routes = () => {
  return (
    <>
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      {/* <Route path="/notes" component={Notes} /> */}
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
      <Route path="/DebtCard" component={DebtCard} />
    </>
  );
};
