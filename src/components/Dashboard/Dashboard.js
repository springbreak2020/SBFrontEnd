import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getIncome } from "../../actions/generalActions";
import "./Dashboard.css";

export const Dashboard = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("REDUX STATE", state);
  useEffect(() => {
    dispatch(getIncome("rectBGEgEpxsCQNrz"));
  }, []);
  return (
    <div className="flex-items">
      <Sidebar />
      <div className="dashboard page">
        <div className="cards">
          <div className="card">
            <h1>Total Budget</h1>
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
          </div>
          <div className="card">
            <h1>Total Debt</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
