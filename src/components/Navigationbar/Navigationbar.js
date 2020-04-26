import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import UserControls from "./UserControls/UserControls";
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
        <UserControls></UserControls>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
