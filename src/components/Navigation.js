import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { authConstants } from '../redux/constants';

export const Navigation = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const logOut = () => {
    dispatch({
      type: authConstants.LOGOUT_SUCCESS,
      payload: false,
    });
  };

  return (
    <Navbar className="nav" color="primary" fixed="true" light expand="md">
      <div className="container">
        <NavbarBrand href="/">Logo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" exact to="/app/home">
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="nav-link" to="/app/about">
                About
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <button onClick={logOut} className="btn btn-outline-light btn-sm ml-5">
          Logout
        </button>
      </div>
    </Navbar>
  );
};
