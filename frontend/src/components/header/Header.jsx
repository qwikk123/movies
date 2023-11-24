import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { NavbarBrand, NavbarCollapse, NavbarToggle } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      style={{ position: "fixed", width: "100%", zIndex: "2000" }}
    >
      <Container fluid>
        <NavbarBrand as={NavLink} to="home" style={{ color: "white" }}>
          <FontAwesomeIcon icon={faVideo} /> qwikk.movies
        </NavbarBrand>
        <NavbarToggle aria-controls="navbarScroll" />
        <NavbarCollapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to="home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="browse/">
              Browse
            </NavLink>
          </Nav>
          <Button variant="outline-info" className="me-2">
            Login
          </Button>
          <Button variant="outline-info">Register</Button>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default Header;
