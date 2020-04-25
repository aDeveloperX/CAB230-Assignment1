import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import getStocks from "../hooks/getStocks";
import registerUser from "../hooks/registerUser";
import loginUser from "../hooks/loginUser";
const Navigationbar = () => {
  getStocks();
  loginUser("haha@gmail.com", "123123asd");
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
        <NavItem>
          <NavLink href="">Register</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="">Login</NavLink>
        </NavItem>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
