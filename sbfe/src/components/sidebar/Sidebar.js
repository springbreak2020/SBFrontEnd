import React from "react";
import "./Sidebar.css";
import Tooltip from "@material-ui/core/Tooltip";
import { withRouter } from "react-router-dom";

const Sidebar = (props) => {
  const toBudget = () => {
    props.history.push("/budgets");
  };
  const toDebt = () => {
    props.history.push("/debtcard");
  };
  const toIncome = () => {
    props.history.push("/incomeexpensecard");
  };
  const toNotes = () => {
    props.history.push("/notescard");
  };
  const toSavings = () => {
    props.history.push("/savingscard");
  };
  const Logout = () => {
    localStorage.setItem("token", "false");
    props.history.push("/");
  };
  console.log(props);
  return (
    <div className="sidebar">
      <div className="icons">
        <Tooltip title="Budget" placement="right">
          <i className="fas fa-wallet" onClick={toBudget} />
        </Tooltip>
        <Tooltip title="Debt" placement="right">
          <i className="fas fa-hand-holding-usd" onClick={toDebt} />
        </Tooltip>
        <Tooltip title="Income" placement="right">
          <i className="fas fa-dollar-sign" onClick={toIncome} />
        </Tooltip>
        <Tooltip title="Notes" placement="right">
          <i className="fas fa-sticky-note" onClick={toNotes} />
        </Tooltip>
        <Tooltip title="Savings" placement="right">
          <i className="fas fa-piggy-bank" onClick={toSavings} />
        </Tooltip>
        <Tooltip title="Logout" placement="right">
          <i className="fas fa-door-open" onClick={Logout} />
        </Tooltip>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
