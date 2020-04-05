import React from "react";
import "./Sidebar.css";
import Tooltip from "@material-ui/core/Tooltip";
import { withRouter } from "react-router-dom";

const Sidebar = (props) => {
  console.log("PROPS", props);
  const toDashboard = () => {
    props.history.push("/dashboard");
  };
  const toBudget = () => {
    props.history.push("/budgets");
  };
  const toDebt = () => {
    props.history.push("/debtadd");
  };
  const toIncome = () => {
    props.history.push("/incomeexpenseadd");
  };
  const toNotes = () => {
    props.history.push("/notesadd");
  };
  const toSavings = () => {
    props.history.push("/savingsadd");
  };
  const Logout = () => {
    localStorage.setItem("token", "false");
    props.history.push("/");
  };
  return (
    <div className="sidebar">
      <div className="icons">
        {props.location.pathname === "/dashboard" ? (
          <Tooltip title="Dashboard" placement="right">
            <i className="fas fa-columns selected" onClick={toDashboard} />
          </Tooltip>
        ) : (
          <Tooltip title="Dashboard" placement="right">
            <i className="fas fa-columns" onClick={toDashboard} />
          </Tooltip>
        )}

        {props.location.pathname === "/budgets" ? (
          <Tooltip title="Budget" placement="right">
            <i className="fas fa-wallet selected" onClick={toBudget} />
          </Tooltip>
        ) : (
          <Tooltip title="Budget" placement="right">
            <i className="fas fa-wallet" onClick={toBudget} />
          </Tooltip>
        )}

        {props.location.pathname === "/debtadd" ? (
          <Tooltip title="Debt" placement="right">
            <i className="fas fa-hand-holding-usd selected" onClick={toDebt} />
          </Tooltip>
        ) : (
          <Tooltip title="Debt" placement="right">
            <i className="fas fa-hand-holding-usd" onClick={toDebt} />
          </Tooltip>
        )}

        {props.location.pathname === "/incomeexpenseadd" ? (
          <Tooltip title="Income" placement="right">
            <i className="fas fa-dollar-sign selected" onClick={toIncome} />
          </Tooltip>
        ) : (
          <Tooltip title="Income" placement="right">
            <i className="fas fa-dollar-sign" onClick={toIncome} />
          </Tooltip>
        )}
        {props.location.pathname === "/notesadd" ? (
          <Tooltip title="Notes" placement="right">
            <i className="fas fa-sticky-note selected" onClick={toNotes} />
          </Tooltip>
        ) : (
          <Tooltip title="Notes" placement="right">
            <i className="fas fa-sticky-note" onClick={toNotes} />
          </Tooltip>
        )}
        {props.location.pathname === "/savingsadd" ? (
          <Tooltip title="Savings" placement="right">
            <i className="fas fa-piggy-bank selected" onClick={toSavings} />
          </Tooltip>
        ) : (
          <Tooltip title="Savings" placement="right">
            <i className="fas fa-piggy-bank" onClick={toSavings} />
          </Tooltip>
        )}
        <Tooltip title="Logout" placement="right">
          <i className="fas fa-door-open" onClick={Logout} />
        </Tooltip>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
