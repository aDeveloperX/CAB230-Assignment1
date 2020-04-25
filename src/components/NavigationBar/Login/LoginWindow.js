import React, { useState } from "react";

import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

const LoginWindow = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Log in</ModalHeader>
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
