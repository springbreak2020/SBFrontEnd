import React from "react";
import { Link } from "react-router-dom";

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
  },
  text: {
    borderBottom: "1px solid grey",
    textAlign: "center",
    margin: "0 auto",
    width: "90%",
  },
});
const NotesCard = () => {
  const classes = useStyles();
  return (
    <div className="note-body">
      <Card className={classes.root} variant="outlined">
        <Typography variant="body2" className={classes.text}>
          <p>Tie in text field for notes</p>
        </Typography>
        <CardActions className={classes.root}>
          <Link to="/noteseditdelete" style={{ textDecoration: "none" }}>
            <Button size="medium">Edit</Button>
          </Link>
          <Button size="medium">Delete</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default NotesCard;
