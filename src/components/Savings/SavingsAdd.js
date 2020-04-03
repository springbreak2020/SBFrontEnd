import React from "react";

import TextField from "@material-ui/core/TextField";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Sidebar from "../Sidebar/Sidebar";

export const SavingsAdd = () => {
  const [value, setValue] = React.useState(0.0);
  const error = value < 0.01;
  return (
    <div className="flex-items">
      <Sidebar />
      <div className="page">
        <h1>Fill out this form to add any savings you have.</h1>
        <TextField
          id="filled-basic"
          label="Type of Savings?"
          variant="filled"
          fullWidth
          margin="normal"
        />
        <TextField
          id="filled-basic"
          label="Where are the savings being held?"
          variant="filled"
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth>
          <CurrencyTextField
            variant="filled"
            label="Amount"
            value={value}
            currencySymbol="$"
            maximumValue={"100000000000000000"}
            autoFocus
            onChange={(e, value) => setValue(value)}
            error={error}
            helperText={"minimum number is .01"}
            decimalCharacter="."
            digitGroupSeparator=","
          />
        </FormControl>
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
