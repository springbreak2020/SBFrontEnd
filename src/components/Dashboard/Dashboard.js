import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getIncome } from "../../actions/generalActions";
import "./Dashboard.css";

export const Dashboard = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("REDUX STATE", state);
  useEffect(() => {
    dispatch(getIncome("rectBGEgEpxsCQNrz"));
  }, []);
  return (
    <div className="dashboard">
      <Sidebar />
    </div>
  );
};
