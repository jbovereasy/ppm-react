import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cnavbar.css";
import mainlogo from "./../assets/ppm.svg";

export default class Cnavbar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img className="logo" src={mainlogo} alt="CSUN logo" responsive />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            {/* <NavItem eventKey={1} componentClass={Link} to="/login">
              Login
            </NavItem> */}
            {/* <NavItem eventKey={2} componentClass={Link} to="/timetracking">
              Timetracking
            </NavItem> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
