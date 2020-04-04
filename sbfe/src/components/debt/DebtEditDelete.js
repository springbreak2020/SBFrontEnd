import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

import "./debt.css";

import Sidebar from "../sidebar/Sidebar";
import TopBar from "../topbar/TopBar";
import BottomBar from "../bottombar/BottomBar";

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
    textAlign: "center",
    margin: "10px auto",
    width: "90%",
    display: "flex",
  },
});
export const DebtEditDelete = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0.0);
  const error = value < 0.01;
  const toDebt = () => {
    props.history.push("/debtcard");
  };
  return (
    <div className="debt-card-body">
      <Sidebar />
      <div className="topbar-card-wrapper">
        <TopBar />
        <Card className={classes.root} variant="outlined">
          <TextField
            id="filled-basic"
            label="Type of debt?"
            helperText={"Required*"}
            variant="filled"
            fullWidth
            margin="normal"
            className={classes.text}
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
              className={classes.text}
            />
          </FormControl>
          <TextField
            id="filled-basic"
            label="Any notes you'd like to record?"
            variant="filled"
            fullWidth
            multiline
            margin="normal"
            className={classes.text}
            onChange={(e, value) => setValue(value)}
          />
          <CardActions className={classes.root}>
            <Button size="medium" onClick={toDebt}>
              Save
            </Button>
            <Button size="medium" onClick={toDebt}>
              Cancel
            </Button>
          </CardActions>
        </Card>
        <BottomBar />
      </div>
    </div>
  );
};
