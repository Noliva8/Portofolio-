import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; 

function NavbarComponent() {
  const [navbarColor, setNavbarColor] = useState('light');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarColor('dark');
    } else {
      setNavbarColor('light');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar bg={navbarColor} expand="lg" className={`navbar-${navbarColor} fixed-top`}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="me-5 navbar-brand olivier">
          Olivier Ndicunguye
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} className="me-4 nav-link" to="/">Home</Nav.Link>
            <Nav.Link as={Link} className="me-4 nav-link" to="/about">About Me</Nav.Link>
            <Nav.Link as={Link} className="me-4 nav-link" to="/service">Services</Nav.Link>
            <Nav.Link as={Link} className="me-4 nav-link" to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} className="me-4 nav-link" to="/contact">Contact Me</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://facebook.com" className="nav-icon">
              <i className="fab fa-facebook"></i>
            </Nav.Link>
            <Nav.Link href="https://twitter.com" className="nav-icon">
              <i className="fab fa-twitter"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
