import React from "react";

import Sidebar from "../sidebar/Sidebar";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./notes.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    justifyContent: "center",
    margin: "10px auto",
    maxWidth: "325px",
    width: "100%",
    height: "fit-content",
  },
  input: {
    width: "90%",
    margin: "10px auto",
    display: "flex",
    padding: "1%"
  },
});

export const NotesEditDelete = (props) => {
  const classes = useStyles();
  const toNotes = () => {
    props.history.push("/dashboard");
  };
  return (
    <div className="note-edit-body">
      <Sidebar />
      <Card className={classes.root} variant="outlined">
        <TextField
          id="filled-basic"
          label="Any thoughts you'd like to record about this entry?"
          variant="filled"
          fullWidth
          multiline
          margin="normal"
          className={classes.input}
        />
        <CardActions className={classes.root}>
          <Button size="medium">Save</Button>
          <Button size="medium" onClick={toNotes}>
            Cancel
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
