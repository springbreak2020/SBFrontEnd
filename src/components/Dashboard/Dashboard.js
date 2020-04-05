import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  getIncome,
  getBudget,
  getDebt,
  getSavings,
  getNotes,
} from "../../actions/generalActions";
import "./Dashboard.css";

export const Dashboard = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("REDUX STATE", state);
  useEffect(() => {
    dispatch(getIncome("rectBGEgEpxsCQNrz"));
    dispatch(getBudget("recrJpQP74GJKOjMF"));
    dispatch(getDebt("rec0sZQOdY4TlCRWY"));
    dispatch(getSavings("rec2M5LQ6nytiqtwo"));
    dispatch(getNotes("recTl1DQeL2gyKrk4"));
  }, []);
  return (
    <div className="flex-items">
      <Sidebar />
      <div className="dashboard page">
        <div className="cards">
          <div className="card">
            <h1>Total Budget</h1>
            <h1>
              $
              {state.general.budget.Period_Total
                ? state.general.budget.Period_Total
                : 0}
            </h1>
          </div>
          <div className="card">
            <h1>Income</h1>
            <h1>
              $
              {state.general.income.Income_Value
                ? state.general.income.Income_Value
                : 0}
            </h1>
          </div>
          <div className="card">
            <h1>Savings</h1>
            <h1>
              ${state.general.savings.amount ? state.general.savings.amount : 0}
            </h1>
          </div>
          <div className="card">
            <h1>Total Debt</h1>
            <h1>
              ${state.general.debt.amount ? state.general.debt.amount : 0}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
