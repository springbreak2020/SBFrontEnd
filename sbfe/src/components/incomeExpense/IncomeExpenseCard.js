import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Sidebar from "../sidebar/Sidebar";
import TopBar from "../topbar/TopBar";
import BottomBar from "../bottombar/BottomBar";

import "./income-expense.css";

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
    borderBottom: "1px solid grey",
    textAlign: "center",
    margin: "0 auto",
    width: "90%",
  },
});
export const IncomeExpenseCard = () => {
  const classes = useStyles();
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ width: "100%" }}>
        <TopBar />
        <Card className={classes.root} variant="outlined">
          <Typography variant="body2" className={classes.text}>
            <h2>Title: Tie in title</h2>
            <h2>Type: Tie in income or expense</h2>
            <h2>Category: Tie in category</h2>
            <h2>Ammount: Tie in ammount</h2>
            <h2>Note: Tie in note</h2>
          </Typography>
          <CardActions className={classes.root}>
            <Link to="/incomeexpenseeditdelete" style={{ textDecoration: "none" }}>
              <Button size="medium">Edit</Button>
            </Link>
            <Button size="medium">Delete</Button>
          </CardActions>
        </Card>
        <BottomBar />
      </div>
    </div>
  );
};