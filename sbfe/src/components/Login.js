import React from "react";

export const Login = () => {
  return (
    <div>
      <h1>
        Welcome to Basic Budget Tracker. Please log in or sign up to continue.{" "}
      </h1>
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
    </div>
  );
};
