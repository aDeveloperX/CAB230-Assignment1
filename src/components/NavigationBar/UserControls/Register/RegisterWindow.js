import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const RegisterWindow = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandle = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      registerUser(email, password);
    }
  };

  const registerUser = async (email, password) => {
    const post = {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    fetch("http://131.181.190.87:3000/user/register", post)
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          alert(res.message);
        } else {
          alert(res.message);
          props.toggle();
        }
      });
  };

  return (
    <Modal isOpen={props.show}>
      <ModalHeader toggle={props.toggle}>Register</ModalHeader>
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
              Register
            </button>
          </form>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default RegisterWindow;
