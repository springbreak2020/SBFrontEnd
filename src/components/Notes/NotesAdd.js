import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./NotesAdd.css";
import Sidebar from "../Sidebar/Sidebar";

export const NotesAdd = () => {
  return (
    <div className="flex-items">
      <Sidebar />
      <div className="page">
        <h1>
          Do you have any notes you'd like to leave for yourself regarding your
          finances?
        </h1>
        <TextField
          id="filled-basic"
          label="Any thoughts you'd like to record about this entry?"
          variant="filled"
          fullWidth
          multiline
          margin="normal"
        />
        <div>
          <Button variant="contained" color="primary">
            Add Another Entry
          </Button>
          <Button variant="contained" color="secondary">
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};
