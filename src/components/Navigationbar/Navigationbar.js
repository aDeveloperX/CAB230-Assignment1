import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import UserControls from "./UserControls/UserControls";
import { NavLink as RRnavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={RRnavLink} exact to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRnavLink} to="/stocks">
              Stock
            </NavLink>
          </NavItem>
        </Nav>
        <UserControls></UserControls>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
