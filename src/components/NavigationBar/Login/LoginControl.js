import React, { useState } from "react";
import { Button } from "reactstrap";
import LoginWindow from "./LoginWindow";

const LoginControl = () => {
  const [isPoped, setIsPoped] = useState(false);

  const toggleHandler = () => {
    setIsPoped(!isPoped);
    console.log(isPoped);
  };

  const loginWindow = isPoped ? <LoginWindow show={isPoped} toggle={toggleHandler}></LoginWindow> : <></>;
  return (
    <div>
      <Button color="info" onClick={() => toggleHandler()}>
        Log in
      </Button>
      {loginWindow}
    </div>
  );
};

export default LoginControl;
