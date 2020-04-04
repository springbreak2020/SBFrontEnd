import React from "react";

import Tooltip from "@material-ui/core/Tooltip";
import { withRouter } from "react-router-dom";

import "./bottombar.css";

const BottomBar = (props) => {
  const addIncome = () => {
    props.history.push("./incomeexpenseadd");
  };
  const addSavings = () => {
    props.history.push("./savingsadd");
  };
  const addDebt = () => {
    props.history.push("./debtadd");
  };
  const addNote = () => {
    props.history.push("./notesAdd");
  };
  return (
    <div className="bottombar">
      <div className="icon-tray">
        <Tooltip title="Add Income/Expense" placement="top" onClick={addIncome}>
          <i className="fas fa-file-invoice-dollar"></i>
        </Tooltip>
        <Tooltip title="Add Savings" placement="top" onClick={addSavings}>
          <i className="fas fa-egg"></i>
        </Tooltip>
        <Tooltip title="Add Debt" placement="top" onClick={addDebt}>
          <i className="fas fa-frown-open"></i>
        </Tooltip>
        <Tooltip title="Add Note" placement="top" onClick={addNote}>
          <i className="fas fa-sticky-note"></i>
        </Tooltip>
      </div>
    </div>
  );
};

export default withRouter(BottomBar);