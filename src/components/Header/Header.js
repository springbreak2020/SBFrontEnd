import React from "react";
import "./Header.css";
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
        <Link className="debt" to="/debtadd">
          Debt
        </Link>
        <Link className="income" to="/incomeexpenseadd">
          Income
        </Link>
        <Link className="notes" to="/notesadd">
          Notes
        </Link>
        <Link className="savings" to="/savingsadd">
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
