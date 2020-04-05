import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
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
export const SavingsEditDelete = (props) => {
  const classes = useStyles();
  const [type, setType] = React.useState("");
  const [value, setValue] = React.useState(0.0);
  const error = value < 0.01;
  const toSavings = () => {
    props.history.push("/savingscard");
  };
  function resetValue() {
    setValue(0);
  }
  const handleChange = (event) => {
    setType(event.target.value);
  };
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ width: "100%" }}>
        <TopBar />
        <Card className={classes.root} variant="outlined">
          <TextField
            id="filled-basic"
            label="Type of Savings?"
            variant="filled"
            className={classes.input}
            onChange={(e, value) => setValue(value)}
          />
          <TextField
            id="filled-basic"
            label="Where are the savings being held?"
            variant="filled"
            className={classes.input}
            onChange={(e, value) => setValue(value)}
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
              className={classes.input}
            />
          </FormControl>
          <TextField
            id="filled-basic"
            label="Anything you'd like to record about this?"
            variant="filled"
            multiline
            className={classes.input}
            onChange={(e, value) => setValue(value)}
          />
          <CardActions className={classes.buttonWrap}>
            <Button size="medium" onClick={toSavings}>
              Save
            </Button>
            <Button size="medium" onClick={toSavings}>
              Cancel
            </Button>
          </CardActions>
        </Card>
        <BottomBar />
      </div>
    </div>
  );
};
