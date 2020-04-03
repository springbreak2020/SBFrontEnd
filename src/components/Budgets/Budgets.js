import React from "react";
import "./Budgets.css";
import Sidebar from "../Sidebar/Sidebar";

export const Budgets = () => {
  return (
    <div className="flex-items">
      <Sidebar />
      <div className="page">
        <h3>Budget Period</h3>
        {/* link to budget Period */}
        <h3>Start Date</h3>
        {/* link to start Date */}
        <h3>End Date</h3>
        {/* link to end date */}
        <h3>Income and Expenses</h3>
        {/* link to categories used in budget Period */}
        <h3>Income Total</h3>
        {/* link to income Total */}
        <h3>Expense Total</h3>
        {/* link to Expense Total */}
        <h3>Period Total</h3>
        {/* link to period total */}
      </div>
    </div>
  );
};

// All of the fields on this table populate from other fields and TableS.
// None of it can be edited from this screen.
// So we'll need to create endpoints to get the data, then map it onto the component
