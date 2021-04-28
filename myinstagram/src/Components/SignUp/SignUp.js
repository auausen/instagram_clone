import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div>
      <input
        className="logipage__text"
        type="text"
        placeholder="Phone number or email"
      />
      <input className="logipage__text" type="text" placeholder="Full Name" />
      <input className="logipage__text" type="text" placeholder="Username" />
      <input
        className="logipage__text"
        type="password"
        placeholder="Password"
      />
      <button className="login__button">Sign up</button>
    </div>
  );
};

export default SignUp;
