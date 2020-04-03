import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const createToken = () => {
    localStorage.setItem("token", "true");
  };
  return (
    <div>
      <div className="links">
        <Link className="budget" to="/budgets">
          Budget
        </Link>
        <Link className="debt" to="/debtcard">
          Debt
        </Link>
        <Link className="income" to="/incomeexpensecard">
          Income
        </Link>
        <Link className="notes" to="/notescard">
          Notes
        </Link>
        <Link className="savings" to="/savingscard">
          Savings
        </Link>
        <div
          class="g-signin2"
          data-onsuccess="onSignIn"
          onClick={createToken}
        ></div>
      </div>
    </div>
  );
};
