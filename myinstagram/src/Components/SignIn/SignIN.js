import React, { useState } from "react";
import "../LoginPage/LoginPage.css";
import { storage, auth } from "../firebase";

const SignIN = () => {
  const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState("");

  const login = () => {
    // localStorage.setItem("users", "admin");
    // window.location.reload();
    auth
      .signInWithEmailAndPassword(emailId, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        localStorage.setItem("users", user);
        window.location.reload();
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  return (
    <div>
      <input
        className="logipage__text"
        type="text"
        onChange={(event) => {
          setemailId(event.currentTarget.value);
        }}
        placeholder="Phone number, username,or email"
      />
      <input
        className="logipage__text"
        type="password"
        onChange={(event) => {
          setpassword(event.currentTarget.value);
        }}
        placeholder="Password"
      />
      <button className="login__button" onClick={login}>
        Log in
      </button>
    </div>
  );
};

export default SignIN;
