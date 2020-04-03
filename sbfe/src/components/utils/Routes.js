import React from "react";
import { Route } from "react-router-dom";
// import { Home } from "../Notes";
import { Notes } from "../notes/NotesCard";
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
import { IncomeExpenseCard } from "../incomeExpense/IncomeExpenseCard";
import { DebtCard } from "../debt/DebtCard";
import { SavingsCard } from "../savings/SavingsCard";
import { NotesCard } from "../notes/NotesCard";

export const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Dashboard} />
      <Route path="/Login" component={Login} />
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
      <Route path="/IncomeExpenseCard" component={IncomeExpenseCard} />
      <Route path="/DebtCard" component={DebtCard} />
      <Route path="/SavingsCard" component={SavingsCard} />
      <Route path="/NotesCard" component={NotesCard} />
    </>
  );
};
