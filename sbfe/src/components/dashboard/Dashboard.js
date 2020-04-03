import React from "react";

import Sidebar from "../sidebar/Sidebar";
import NotesCard from "../notes/NotesCard";

import "./dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <NotesCard />
    </div>
  );
};
