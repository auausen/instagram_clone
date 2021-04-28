import React from "react";
import "../LoginPage/LoginPage.css";

const SignIN = () => {
  return (
    <div>
      <input
        className="logipage__text"
        type="text"
        placeholder="Phone number, username,or email"
      />
      <input
        className="logipage__text"
        type="password"
        placeholder="Password"
      />
      <button className="login__button">Log in</button>
    </div>
  );
};

export default SignIN;
