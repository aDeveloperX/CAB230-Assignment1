import React, { useState } from "react";
import LoginControl from "./Login/LoginControl";
import RegisterControl from "./Register/RegisterControl";

const UserControls = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const loginHandler = () => {
    if (!isLoggedin) {
      setIsLoggedin(true);
    }
  };
  //localStorage.removeItem("isLogin");
  const buildControl =
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
