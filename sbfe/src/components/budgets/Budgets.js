import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import Sidebar from "../sidebar/Sidebar";
import TopBar from "../topbar/TopBar";
import BottomBar from "../bottombar/BottomBar";

import "./budgets.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "10px auto",
    height: "fit-content",
    justifyContent: "center",
    width: "90%",
    maxWidth: "400px",
  },
  text: {
    textAlign: "left",
    margin: "0 auto",
    width: "90%",
  },
});

export const Budgets = () => {
  const classes = useStyles();
  return (
    <div className="budget-body">
      <Sidebar />
      <div className="topbar-card-wrapper">
        <TopBar />
        <Card className={classes.root} variant="outlined">
          <Typography variant="body2" className={classes.text}>
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
          </Typography>
        </Card>
        <BottomBar />
      </div>
    </div>
  );
};

// All of the fields on this table populate from other fields and TableS.
// None of it can be edited from this screen.
// So we'll need to create endpoints to get the data, then map it onto the component
