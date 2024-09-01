import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavigationBar.css"; // Import the custom CSS file

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-primary">
          HSTP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-item">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/nutrition" className="nav-item">
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/nutrition" className="nav-item">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-item">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
