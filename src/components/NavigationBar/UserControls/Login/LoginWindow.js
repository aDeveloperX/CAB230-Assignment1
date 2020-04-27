import React, { useState } from "react";

import { Modal, ModalHeader, ModalBody } from "reactstrap";

const LoginWindow = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandle = (e) => {
    setPassword(e.target.value);
  };

  const loginUser = async () => {
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
    fetch("http://131.181.190.87:3000/user/login", post)
      .then((response) => response.json())
      .then((res) => {
        //"lol@test.com", "123321"
        if (res.error === true) {
          console.log(res.message);
        } else {
          localStorage.setItem("token", res.token);
          localStorage.setItem("isLogin", true);
          localStorage.setItem("username", email);
          props.login();
        }
      });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      await loginUser();
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default LoginWindow;
