import React from "react";
import "./Header.css";
//import { Autocomplete } from "@react-google-maps/api";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";

function Header({ logo }) {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="logo" width={150} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <SearchBar />
          <Nav className="ms-auto">
            <Link className="navItems" to="/">
              Home
            </Link>
            <Link className="navItems" to="/about">
              About
            </Link>
            <div className="headerRight">
              <Link className="Btn" to="/login">
                <LoginIcon fontSize="large" style={{ color: "green" }} />
                <h6 className="ms-2 mb-0">Login</h6>
              </Link>
              <Link className="Btn" to="/signup">
                <PersonAddIcon fontSize="large" style={{ color: "green" }} />
                <h6 className="ms-2 mb-0">Sign Up</h6>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
