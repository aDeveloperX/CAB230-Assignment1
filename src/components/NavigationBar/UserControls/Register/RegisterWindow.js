import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const RegisterWindow = () => {
  return (
    <Modal isOpen={props.show}>
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
            <button
              onClick={submitHandler}
              className="btn btn-primary btn-block"
            >
              Submit
            </button>
          </form>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default RegisterWindow;
