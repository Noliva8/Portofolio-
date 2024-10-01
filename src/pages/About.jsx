import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import noliva from "../assets/Edited2.png"; 

import { motion } from "framer-motion";
import './about.css';



export default function About() {
  const cardData = [
    {
      title: "Full-Stack Developer",
      content:
        "Crafting seamless digital experiences with React, Node.js, and PostgreSQL. Passionate about turning complex problems into simple, elegant solutions."
    },
    {
      title: "Creative Visionary",
      content:
        "Before software, I was a video producer. My creative journey taught me the art of design, storytelling, and attention to detail—skills I bring into every line of code."
    },
    {
      title: "Design-Driven Development",
      content:
        "I believe that great design is the foundation of user-friendly applications. I fuse aesthetics and functionality to create intuitive user experiences."
    },
    {
      title: "Problem Solver",
      content:
        "I love tackling complex challenges and finding efficient solutions through code. My goal is to build software that not only works but works elegantly."
    },
    {
      title: "Media Meets Code",
      content:
        "With a background in video production, I strive to merge media and technology. From visual storytelling to coding rich media applications, I bring the best of both worlds."
    },
    {
      title: "Lifelong Learner",
      content:
        "I thrive on learning new technologies and growing as a developer. Constantly pushing boundaries and exploring the latest in software and media tech."
    }
  ];

  return (
    <Container fluid className="d-flex align-items-center flex-column">
      {/* Header Section */}
      <Row
        className="align-items-center justify-content-center border-bottom"
        style={{ minHeight: "400px", padding: "20px 0", margin: "50px" }}
      >
        <Col xs={12} md={6}>
          <img
            src={noliva}
            alt="Image of Olivier"
            style={{
              marginLeft: "60px",
              width: "60%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "10px"
            }}
          />
        </Col>
        <Col xs={12} md={6} style={{ padding: "20px" }}>
          <h1
            style={{
              display: "flex",
    justifyContent: "start",
    fontSize: "3.5rem", 
    fontFamily: "Playfair Display, serif", 
    fontWeight: "bold",
    color: "#2c3e50", 
    letterSpacing: "2px", 
    textTransform: "uppercase",
    paddingBottom: "20px", 
   
    marginBottom: "10px", 
    textShadow: "2px 2px 5px rgba(0,0,0,0.15)"
            }}
          >
            I'M MORE THAN A DEVELOPER
          </h1>
          <p
            style={{
              fontFamily: "Roboto",
              color: "#6c757d",
              maxWidth: "500px",
              fontSize: "18px",
              lineHeight: "1.5"
            }}
          >
            Before becoming a software engineer, I was a video producer.
            <br /> This shaped my understanding of what good design means.
          </p>
        </Col>
      </Row>

      {/* Row for Cards */}
      <Row className="mt-5 mb-5 justify-content-center">
       <h2 
  
  style={{
    display: "flex",
    justifyContent: "center",
    fontSize: "2.5rem", 
    fontFamily: "Playfair Display, serif", 
    fontWeight: "bold",
    color: "#2c3e50", // Dark,
    letterSpacing: "2px", 
    textTransform: "uppercase",
    paddingBottom: "20px", 
    
    marginBottom: "40px", 
    textShadow: "2px 2px 5px rgba(0,0,0,0.15)"
  }}
>
  Who I Am ?
</h2>

        {cardData.map((card, index) => (
          <Col key={index} md={4} className="mb-4">
            <motion.div
              initial={{ opacity: 0, rotate: 30 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: index * 0.2 }} // Adds staggered fade effect
            >
              {/* Decorative background */}
              <Card className="card-decoration" style={{
                position: "absolute",
                top: "-30px",
                left: "10px",
                right: "10px",
                bottom: "0",
                zIndex: "-1",
                maxWidth:"550px",
                height: "250px",
                backgroundColor: "#acc1e9",
                opacity: 0.9,
                clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)" 
              }}></Card>

              
              <Card className="card" style={{ padding: "20px", textAlign: "center", maxWidth: "500px", height: "100%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", position: "relative", zIndex: "1"}}>
                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: "1.5rem",
                      fontFamily: "Playfair Display",
                      fontWeight: "bold",
                      color: "#1e2125",
                      padding: "20px"
                    }}
                  >
                    {card.title}
                  </Card.Title>
                  <Card.Text
                    style={{
                      fontFamily: "Roboto",
                      color: "#6c757d",
                      fontSize: "18px",
                      lineHeight: "1.5"
                    }}
                  >
                    {card.content}
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      <Row>

        <Col  xs={12}>
        
        <Card style={{width: "100%", justifyContent: "center", alignItems:"center"}}>
          <Card.Title>Follow me on: </Card.Title>
          <Card.Body>

               <a href="https://github.com/Noliva8" className="nav-icon">
             <i className="fa-brands fa-github"></i>
              </a>

              <a href="https://www.linkedin.com/in/olivier-ndicunguye-045697301/" className="nav-icon">
              <i className="fa-brands fa-linkedin"></i>
              </a>
            
            <a href="https://www.facebook.com/profile.php?id=61555700842418" className="nav-icon">
              <i className="fab fa-facebook"></i>
              </a>

                <a href="" className="nav-icon">
             <i className="fa-brands fa-instagram"></i>
              </a>
              
            <a href="https://twitter.com" className="nav-icon">
              <i className="fab fa-twitter"></i>
          </a>


          
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  );
}
