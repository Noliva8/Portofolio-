import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Logo Container */}
        <Navbar.Brand as={Link} to="/" className="me-5">
          Olivier Ndicunguye
        </Navbar.Brand>

        {/* Hamburger Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
      
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex-nowrap">
            <Nav.Link as={Link} className="me-3" to="/">Home</Nav.Link>
            <Nav.Link as={Link} className="me-3" to="/about">About Me</Nav.Link>
            <Nav.Link as={Link} className="me-3" to="/service">Services</Nav.Link>
            <Nav.Link as={Link} className="me-3" to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://facebook.com">
              <i className="fab fa-facebook"></i>
            </Nav.Link>
            <Nav.Link href="https://twitter.com">
              <i className="fab fa-twitter"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
