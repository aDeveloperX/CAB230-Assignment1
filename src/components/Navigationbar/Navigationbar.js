import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import LoginButton from "./Buttons/LoginButton";
import RegisterButton from "./Buttons/RegisterButton";
const Navigationbar = () => {
  //loginUser("haha@gmail.com", "123123asd");
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Stock</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Quote</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Price History(restricted)</NavLink>
          </NavItem>
        </Nav>
        <RegisterButton></RegisterButton>
        <LoginButton></LoginButton>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
