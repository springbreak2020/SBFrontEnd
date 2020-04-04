import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import Sidebar from "../sidebar/Sidebar";

import "./budgets.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: "fit-content",
    margin: "10px auto",
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
    </div>
  );
};

// All of the fields on this table populate from other fields and TableS.
// None of it can be edited from this screen.
// So we'll need to create endpoints to get the data, then map it onto the component
