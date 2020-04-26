import React, { useState } from "react";
import { Button } from "reactstrap";
import LoginWindow from "./LoginWindow";

const LoginControl = () => {
  const [isPoped, setIsPoped] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false)

  const toggleHandler = () => {
    setIsPoped(!isPoped);
  };

  const loginHandler = () => {
    setIsLoggedin(true)
  }

  return (
    <div>
      <Button color="info" onClick={() => toggleHandler()}>
        Log in
      </Button>
      <LoginWindow show={isPoped} toggle={toggleHandler} login={loginHandler}></LoginWindow>
    </div>
  );
};

export default LoginControl;
