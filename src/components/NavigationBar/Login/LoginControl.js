import React, { useState } from "react";
import { Button } from "reactstrap";
import LoginWindow from "./LoginWindow";

const LoginControl = () => {
  const [isPoped, setIsPoped] = useState(false);

  const buttonClickHandler = () => {
    setIsPoped(!isPoped);
    console.log(isPoped);
  };

  const loginWindow = isPoped ? <LoginWindow></LoginWindow> : <></>;
  return (
    <div>
      <Button color="info" onClick={() => buttonClickHandler()}>
        Log in
      </Button>
      {loginWindow}
    </div>
  );
};

export default LoginControl;
