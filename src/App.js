import React from "react";
import { Routes } from "./components/utils/Routes";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <>
      {/* material ui's css reset */}
      <CssBaseline />
      <Routes />
    </>
  );
}

export default App;
