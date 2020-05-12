import React, { useState } from "react";
import LoginControl from "./Login/LoginControl";
import RegisterControl from "./Register/RegisterControl";

const UserControls = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  //if the user is loggedin
  const loginHandler = () => {
    if (!isLoggedin) {
      setIsLoggedin(true);
    }
  };

  const buildControl =
    // if the user is logged in, display the username, otherwise display the login and register buttons
    localStorage.getItem("isLogin") === "true" ? (
      <h4 className="text-primary">{localStorage.getItem("username")}</h4>
    ) : (
      <div className="row">
        <RegisterControl></RegisterControl>
        <div className="ml-1">
          <LoginControl login={loginHandler}></LoginControl>
        </div>
      </div>
    );

  return buildControl;
};

export default UserControls;
