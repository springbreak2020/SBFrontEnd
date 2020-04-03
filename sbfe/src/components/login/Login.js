import React, { useState, useEffect } from "react";
import "./Login.css";
import { Header } from "../Header/Header";

export const Login = (props) => {
  const [login, setLogin] = useState();
  const toDashboard = () => {
    props.history.push("/dashboard");
  };

  useEffect(() => {
    setLogin(localStorage.getItem("token"));
  }, [localStorage.getItem("token")]);

  if (login === "true") {
    toDashboard();
  }

  console.log("Login", login);
  console.log("Props", props);

  return (
    <>
      <Header />
      <div className="login">
        <div className="flex">
          <div className="sideone">
            <h1>Effectively </h1>
            <h1>manage your</h1>
            <h1>budget</h1>
            <p>The app gives you the power to manage your budget.</p>
          </div>
          <div className="sidetwo">
            <img src="https://i.imgur.com/B29pXMf.png" alt="Managing Budget" />
          </div>
        </div>
      </div>
    </>
  );
};
