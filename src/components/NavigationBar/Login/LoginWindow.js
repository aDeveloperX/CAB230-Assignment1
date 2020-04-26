import React, { useState } from "react";

import { Modal, ModalHeader, ModalBody } from "reactstrap";

const LoginWindow = (props) => {
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
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
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
