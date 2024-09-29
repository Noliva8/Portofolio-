import React from 'react';
import olivierImage from '../assets/olivier.png';
import { Container, Row, Col } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';  
import './home.css';

export default function Home() {
  const landingPageStyle = {
    height: "100vh",
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    padding: '0 15px',
  };

  const footerStyle = {
    backgroundColor: '#343a40',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
  };

  return (
    <>

  
      <Container className='mt-5 pt-5' fluid  style={landingPageStyle}>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center">
            <img src={olivierImage} alt="Olivier" className="img-fluid rounded-circle shadow-lg" style={{ maxWidth: '70%', height: 'auto', border: '1px solid #000' }} />
          </Col>

          <Col xs={12} md={6} className="d-flex flex-column align-items-center align-items-md-start justify-content-center">
            <h1 className="display-3" style={{ fontFamily: 'Playfair Display', fontWeight: 'bold', letterSpacing: '2px' }}>I'm</h1>
            
            <ReactTypingEffect
              text={["Olivier Ndicunguye", "A Software Engineer", "A Fullstack Application Developer", "Based in Arizona USA"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={200}
              eraseDelay={1000}
              className="display-4"
              style={{ fontFamily: 'Playfair Display', fontWeight: 'bold', color: '#1e2125' }}
            />

            <p className="lead mt-4" style={{ fontFamily: 'Roboto', color: '#6c757d', maxWidth: '500px' }}>
              Creating elegant, responsive, and user-friendly digital experiences. Let's work together to make your vision a reality.
            </p>
          </Col>
        </Row>
      </Container>


    </>
  );
}
