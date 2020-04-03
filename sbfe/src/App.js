import React from "react";
import "./App.css";
import { Routes } from "./components/utils/Routes";
import CssBaseline from "@material-ui/core/CssBaseline";

import TopAppBar from "./components/TopAppBar";

function App() {
  return (
    <>
      {/* material ui's css reset */}
      <TopAppBar />
      <CssBaseline />
      <Routes />
    </>
  );
}

export default App;
