import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import LoginControl from "./Login/LoginControl";
import RegisterControl from "./Register/RegisterControl";
const NavigationBar = () => {
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
        <RegisterControl></RegisterControl>
        <LoginControl></LoginControl>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
