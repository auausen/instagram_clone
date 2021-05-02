import React, { useState } from "react";
import "./SignUp.css";
import { storage, auth } from "../firebase";

const SignUp = (props) => {
  const [emailId, setemailId] = useState("");
  const [name, setname] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  const newSignup = () => {
    auth.createUserWithEmailAndPassword(emailId, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;

        let payload = {
          "userId": user.uid,
        "userName": userName,
          "name": name,
          "profileImage":""
        }
        const requestOptions = {
          method: "POST",
          headers: { 'ContentType': "application/json" },
          body: JSON.stringify(payload)
        }
          
        fetch("", requestOptions)
          .then(response => response.json())
          .then(data => {
          
          })
          

          .catch(error => {
          
        })
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  };

  return (
    <div>
      <input
        className="logipage__text"
        onChange={(event) => {
          setemailId(event.currentTarget.value);
        }}
        type="text"
        placeholder="Phone number or email"
      />
      <input
        className="logipage__text"
        onChange={(event) => {
          setname(event.currentTarget.value);
        }}
        type="text"
        placeholder="Full Name"
      />
      <input
        className="logipage__text"
        onChange={(event) => {
          setuserName(event.currentTarget.value);
        }}
        type="text"
        placeholder="Username"
      />
      <input
        className="logipage__text"
        onChange={(event) => {
          setpassword(event.currentTarget.value);
        }}
        type="password"
        placeholder="Password"
      />
      <button className="login__button" onClick={newSignup} >
        Sign up
      </button>
    </div>
  );
};

export default SignUp;
