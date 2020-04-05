import React from "react";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import Sidebar from "../sidebar/Sidebar";
import TopBar from "../topbar/TopBar";
import BottomBar from "../bottombar/BottomBar";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "10px auto",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "90%",
    maxWidth: "400px",
  },
  text: {
    borderBottom: "1px solid grey",
    textAlign: "center",
    margin: "10px auto",
    width: "90%",
  },
  input: {
    margin: "10px auto",
    width: "90%",
  },
  buttonWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
export const NotesEditDelete = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const toNotes = () => {
    props.history.push("/dashboard");
  };
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ width: "100%" }}>
        <TopBar />
        <Card className={classes.root} variant="outlined">
          <TextField
            id="filled-basic"
            label="Anything you'd like to record?"
            variant="filled"
            multiline
            className={classes.input}
            onChange={(e, value) => setValue(value)}
          />
          <CardActions className={classes.buttonWrap}>
            <Button size="medium" onClick={toNotes}>
              Save
            </Button>
            <Button size="medium" onClick={toNotes}>
              Cancel
            </Button>
          </CardActions>
        </Card>
        <BottomBar />
      </div>
    </div>
  );
};
