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

import "./debt.css";

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
export const DebtCard = () => {
  const classes = useStyles();
  return (
    <div className="debt-card-body">
      <Sidebar />
      <div className="topbar-card-wrapper">
        <TopBar />
        <Card className={classes.root} variant="outlined">
          <Typography variant="body2" className={classes.text}>
            <p>Type: Tie in type of debt</p>
            <p>Ammount: Tie in ammount</p>
            <p>Note: Tie in note</p>
          </Typography>
          <CardActions className={classes.root}>
            <Link to="/debteditdelete" style={{ textDecoration: "none" }}>
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
