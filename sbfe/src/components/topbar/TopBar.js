import React from "react";

import "./topbar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <h1 className="topbar-text">Budget: XXXX.XX</h1>
      <h1 className="topbar-text">Savings: XXXX.XX</h1>
      <h1 className="topbar-text">Debt: XXXXX.XX</h1>
    </div>
  );
};

export default TopBar;
