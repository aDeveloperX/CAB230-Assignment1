import React, { useState } from "react";
import loginUser from '../../../hooks/loginUser'
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const LoginWindow = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordHandle = (e) => {
    setPassword(e.target.value)
  }

  const submitHandler = () => {
    (!email && !password) ? console.log("yes") : console.log("no")
  }
  return (
    <div>
      <Modal isOpen={props.show} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Log in</ModalHeader>
        <ModalBody>
          <div className="container">
            <form className="float-none ">
              <div className="form-group">
                <label>Email address</label>
                <input
                  onChange={emailHandler}
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  onChange={passwordHandle}
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <button onClick={submitHandler} className="btn btn-primary btn-block">
                Submit
              </button>
            </form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LoginWindow;
