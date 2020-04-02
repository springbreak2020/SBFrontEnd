import React from "react";

import TextField from "@material-ui/core/TextField";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import FormControl from "@material-ui/core/FormControl";

export const Savings = () => {
  const [value, setValue] = React.useState(0.0);
  const error = value < 0.01;
  return (
    <div>
      <h1>
        Fill out this form to add any savings you have. Examples inclute savings
        accounts, 401k, roth IRA, and investments.
      </h1>
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
    </div>
  );
};
