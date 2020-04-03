import React from "react";
import "./Login.css";
import { Header } from "../Header/Header";

export const Login = () => {
  return (
    <>
      <Header />
      <div className="login">
        <div className="flex">
          <div className="sideone">
            <h1>Effectively </h1>
            <h1>manage your</h1>
            <h1>budget</h1>
            <p>The app gives you the power to manage budget.</p>
          </div>
          <div className="sidetwo">
            <img src="https://i.imgur.com/B29pXMf.png" alt="Managing Budget" />
          </div>
        </div>
      </div>
    </>
  );
};
