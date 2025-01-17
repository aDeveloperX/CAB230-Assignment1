import React, { useState } from "react";
import { Button } from "reactstrap";
import LoginWindow from "./LoginWindow";

const LoginControl = (props) => {
  const [isPoped, setIsPoped] = useState(false);

  //to toggle the login window
  const toggleHandler = () => {
    setIsPoped(!isPoped);
  };

  return (
    <div>
      <Button color="info" onClick={toggleHandler}>
        Log in
      </Button>
      <LoginWindow
        show={isPoped}
        toggle={toggleHandler}
        login={props.login}
      ></LoginWindow>
    </div>
  );
};

export default LoginControl;
