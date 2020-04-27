import React, { useState } from "react";
import { Button } from "reactstrap";
import RegisterWindow from "./RegisterWindow";

const RegisterControl = () => {
  const [isPoped, setIsPoped] = useState(false);

  const toggleHandler = () => {
    setIsPoped(!isPoped);
  };

  return (
    <div>
      <Button outline color="primary" onClick={toggleHandler}>
        Register
      </Button>
      <RegisterWindow show={isPoped} toggle={toggleHandler}></RegisterWindow>
    </div>
  );
};

export default RegisterControl;
