import React from "react";
import "./LoginPage.css";
import Grid from "@material-ui/core/Grid";
import inst_image from "../../images/9364675fb26a.svg";
import insta_logo from "../../images/logoinsta.png";

const LoginPage = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <div className="loginpage_main">
            <div>
              <img src={inst_image} width="454px" />
            </div>
            <div>
              <div className="loginpage_rightcomponent">
                <img className="loginpage__logo" src={insta_logo} />
                <div className="loginPage__singin">
                  <input
                    className="logipage__text"
                    type="text"
                    placeholder="phone number, username,or email"
                  />
                  <input
                    className="logipage__text"
                    type="password"
                    placeholder="Password"
                  />
                  <button className="login__button">Sign In</button>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;
