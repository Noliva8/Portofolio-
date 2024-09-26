import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for routing
import './about.css';
import { FaDownload } from 'react-icons/fa'; 
import noliva from '../assets/Noliva.png';
import 'animate.css';
import ReactTypingEffect from 'react-typing-effect'; 

export default function About() {


  return (
    <div className="app"> {/* Wrap everything in a flex container */}
      <div className="aboutWrapper">
        <div className="contentWrpper">
          <div className='about-content-one'>
            <div className='cirle'>
              <div className='line-shape-one'></div>
              <div className='line-shape-two'></div>
              <div className='line-shape-three'></div>
              <div className='line-shape-four'></div>
            </div>
            <img className='about-image' src={noliva} alt='image of olivier'/>
            <ReactTypingEffect
              text={["Hey, the world is moving so fast", "make sure you do not stay behind", "I am here to help"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={200}
              eraseDelay={1000}
              className="display-4"
              style={{ fontFamily: 'Playfair Display', fontWeight: 'bold', fontSize: "20px", color: '#1e2125', position: "absolute", bottom: "20px", marginLeft: "20px"}}
            />
          </div>

          <div className='about-content-two'>
            <h2>I’m Olivier Ndicunguye, a Software Engineer.</h2>
            <p class="animate__animated animate__fadeInUp">
              Hi, I’m Olivier Ndicunguye. My unexpected journey into software engineering began when I hired someone to build a website for my media company, but the outcome was disappointing.
            </p>
            <p class="animate__animated animate__flipInX">
              Before entering software engineering, I spent my career in the video production industry, where I created and managed various projects. My desire to adapt to the digital age led me to seek help in developing a custom application for my company. However, the poorly designed website I received didn’t match my vision.
            </p>
            <p class="animate__animated animate__slideInRight">
              This frustration became the turning point. Instead of settling, I decided to take control of my company's digital future by enrolling at Arizona State University to study Software Engineering. Thanks to my incredible instructor, Omar, and all the TAs who supported me along the way, I was able to chart a new path in tech.
            </p>
            <p>
              Today, I’m proud to build applications that not only meet my standards but also provide value to others.
            </p>
            <Button as={Link} to="/contact" variant="primary">Get in touch</Button> {/* Link the button */}
          </div>
        </div>
      </div>

     
    </div>
  );
}
