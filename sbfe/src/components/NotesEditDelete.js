import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const NotesEditDelete = () => {
  return (
    <div>
      <h1>
        Do you need to edit or delete any notes you left for yourself regarding
        your finances?
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
          Edit
        </Button>
        <Button variant="contained" color="secondary">
          Delete
        </Button>
      </div>
    </div>
  );
};
