import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "../Forms/Login";
import SignUp from "../Forms/SignUp";

const style = {
  border: "none",
  boxShadow: "none",
  fontSize: "1.5rem",
};
const navStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 999,
};

function Header({ logo }) {
  
  return (
    <Navbar expand="md" style={navStyle}>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="logo" width={130} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={style} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link className="navItems" to="/">
              Home
            </Link>
            <Link className="navItems" to="/about">
              About
            </Link>
            <Link className="navItems" to="/about">
              Services
            </Link>
          </Nav>
          <div className="headerRight">
            <Login logo={logo} Btn={"Btn"}/>
            <SignUp logo={logo} Btn={"Btn Btn-Secondary"} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
