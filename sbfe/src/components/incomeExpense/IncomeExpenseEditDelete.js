import React from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import Button from "@material-ui/core/Button";

import "./income-expense.css";

export const IncomeExpenseEditDelete = () => {
  const [type, setType] = React.useState("");
  const [value, setValue] = React.useState(0.0);
  const error = value < 0.01;

  function resetValue() {
    setValue(0);
  }
  return (
    <div>
      <div>
        <h1>Use this form to edit or delete any previous entries you made.</h1>
        <TextField
          id="filled-basic"
          label="Type of Income/Expense ie. Pay Check or Rent"
          variant="filled"
          fullWidth
          margin="normal"
        />
        <FormControl variant="filled" fullWidth>
          <InputLabel>Income or Expense</InputLabel>
          <Select
            value={type}
            // onChange={handleChange}
          >
            <MenuItem value={1}>Income</MenuItem>
            <MenuItem value={2}>Expense</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="filled" fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={[]}

            // onChange={handleChange}
          >
            <MenuItem value={1}>Mortgage/Rent</MenuItem>
            <MenuItem value={2}>Automotive</MenuItem>
            <MenuItem value={3}>Utilities</MenuItem>
            <MenuItem value={4}>Education</MenuItem>
            <MenuItem value={5}>Communication</MenuItem>
            <MenuItem value={6}>Health</MenuItem>
            <MenuItem value={7}>Insurance</MenuItem>
            <MenuItem value={8}>Food</MenuItem>
            <MenuItem value={9}>Entertainment</MenuItem>
            <MenuItem value={10}>Other</MenuItem>
            <MenuItem value={11}>Income</MenuItem>
          </Select>
        </FormControl>
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
