import React, { useState } from "react";
import { Link } from "react-router-dom";

import MenuExpansion from "./MenuExpansion";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import "../App.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function TopAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuActive, setMenuState] = useState(false);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            //   className={` ${
            //     menuActive ? "none" : "display"
            //   }`}
            //   onClick={() => setMenuState(!menuActive)}
            >
              <MenuItem onClick={handleClose}>
                <MenuExpansion />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="./budgets" onClick={handleClose}>
                  Budgets
                </Link>
              </MenuItem>
            </Menu>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Balance: $XXXX.XX
          </Typography>
          <Button variant="outlined">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
