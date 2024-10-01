import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; 

function NavbarComponent() {
  const [navbarColor, setNavbarColor] = useState('light');
  const [expanded, setExpanded] = useState(false);

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

  const [currentPage, setCurrentPage] = useState('Home');
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setExpanded(false);
  };

  return (
    <Navbar bg={navbarColor} expand="lg" className={`navbar-${navbarColor} fixed-top`} expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="me-5 navbar-brand olivier" onClick={() => setExpanded(false)}>
          Olivier Ndicunguye
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="navbar-toggler" // Apply custom class here
          onClick={() => setExpanded(expanded ? false : 'true')} 
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              className={`me-4 nav-link ${currentPage === 'Home' ? 'active' : ''}`}
              onClick={() => handlePageChange('Home')}
              to="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              className={`me-4 nav-link ${currentPage === 'About' ? 'active' : ''}`}
              onClick={() => handlePageChange('About')}
              to="/about"
            >
              About Me
            </Nav.Link>
            <Nav.Link
              as={Link}
              className={`me-4 nav-link ${currentPage === 'Portfolio' ? 'active' : ''}`}
              onClick={() => handlePageChange('Portfolio')}
              to="/portfolio"
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={Link}
              className={`me-4 nav-link ${currentPage === 'Contact' ? 'active' : ''}`}
              onClick={() => handlePageChange('Contact')}
              to="/contact"
            >
              Contact Me
            </Nav.Link>
            <Nav.Link
              as={Link}
              className={`me-4 nav-link ${currentPage === 'Resume' ? 'active' : ''}`}
              onClick={() => handlePageChange('Resume')}
              to="/resume"
            >
              Resume
            </Nav.Link>
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
