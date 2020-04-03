import React from "react";
import "./Login.css";
import { Header } from "../Header/Header";

export const Login = () => {
  return (
    <>
      <Header />
      <div className="login-body">
        <div className="decorative-div"></div>
        <h1>
          Welcome to Basic Budget Tracker. Please log in or sign up to continue.{" "}
        </h1>
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
      </div>
    </>
  );
};
