import React, { useState } from "react";
import { Button } from "reactstrap";
import LoginWindow from "./LoginWindow";

const LoginControl = (props) => {
  const [isPoped, setIsPoped] = useState(false);

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
        getname={props.getname}
      ></LoginWindow>
    </div>
  );
};

export default LoginControl;
