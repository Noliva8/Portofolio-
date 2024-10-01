import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./portfolio.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import monsterpic from "../assets/monsterpic.png";
import cmspic from "../assets/cmspic.png";
import note from "../assets/note.png";
import wheather from "../assets/wheather.png";
import gggg from "../assets/gggg.png";

const projects = [
  {
    title: "the Stock-ness Monster",
    imageUrl: monsterpic,
    deployedLink: "https://github.com/lindsay-terry/stock-ness-monster",
    repoLink: "https://github.com/lindsay-terry/stock-ness-monster",
  },
  {
    title: "CMS-style blog site similar to a Wordpress site",
    imageUrl: cmspic,
    deployedLink: "https://cms-style-blog-site-xoig.onrender.com",
    repoLink: "https://github.com/Noliva8/CMS-style-blog-site/tree/main",
  },

  {
    title: "Note-Taker-Application",
    imageUrl: note,
    deployedLink: "https://dashboard.render.com/web/srv-cq7l3ijv2p9s73c657rg",
    repoLink: "https://github.com/Noliva8/Note-Taker-Application",
  },
  {
    title: "weather-dashboard",
    imageUrl: wheather,
    deployedLink: "https://noliva8.github.io/-weather-dashboard-/",
    repoLink:
      "https://github.com/Noliva8/-weather-dashboard-?tab=readme-ov-file",
  },
  {
    title: "Employee-Payroll-Tracker",
    imageUrl: gggg,
    deployedLink: "https://noliva8.github.io/Employee-Payroll-Tracker/",
    repoLink: "https://github.com/Noliva8/Employee-Payroll-Tracker/deployments",
  },
];

export default function Portfolio() {
   
  return (
    <Container>
      <Row style={{ marginTop: "140px", marginBottom: "80px"}}>
        <Col xs={12} md={6}>
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
             
              textShadow: "2px 2px 5px rgba(0,0,0,0.15)",
            }}
          >
            PORTOFOLIO
          </h1>
          <p style={{ marginBottom: "10px", fontSize: "18px", color: "#2c3e50",}}>Some of my projects</p>
          <span style={{width:"30px", height: "3px", backgroundColor: "black"}}></span>
        </Col>
      </Row>
{/* ------------------------------- */}
      <Row>
       {projects.map((project, index) =>(
        <Col md={6} key={index}>
          <Card>
          <Card.Title style={{fontFamily: "Playfair Display, serif",}}>{project.title}</Card.Title>
          <Card.Img src= {project.imageUrl} alt="project image" />
          <Card.Body style={{display: "flex", justifyContent: "space-between"}}>
              <a href={project.deployedLink} style={{display: "inline", backgroundColor: "#345d95", color: "white", cursor: "pointer", borderRadius: "10px", border: "1px solid black", fontSize: " 18px", padding: "10px", textDecoration: "none"}}> <i style={{margin: "10px"}} className="fa-brands fa-square-github"></i> Deployed Link</a>
              
           <a href={project.repoLink} style={{display: "inline", backgroundColor: "#345d95", color: "white", cursor: "pointer", borderRadius: "10px", border: "1px solid black", fontSize: " 18px", padding: "10px", textDecoration: "none"}}> <i style={{margin: "10px"}} className="fa-brands fa-square-github"></i> Github repo</a>
          </Card.Body>

          </Card>
        </Col>
       )
       )}
        
      </Row>
    </Container>
  );
}
