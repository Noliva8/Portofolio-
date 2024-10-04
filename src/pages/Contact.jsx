import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Modal } from "react-bootstrap";
import "./contact.css";

import { Container, Row, Col } from "react-bootstrap";
import contactGirl from "../assets/contact-girl.png";


const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s1m9vzm",
        "template_xpmnfao",
        form.current,
        "baT40mDhsq67bU9vc"
      )
      .then(
        () => {
          form.current.reset();
          setShowModal(true);
        },
        (error) => {
          console.error("FAILED...", error.text); // Log error
          alert("Failed to send message. Please try again later."); // Optional: user feedback
        }
      );
  };

  return (


<Container 
  style={{ height: "100vh" }} 
  className="d-flex justify-content-center align-items-center"
>
  <Row 
    style={{ borderRadius: "0 0 20px 20px", width: "100%", height: "60%", backgroundColor: "#a8cbdf", position: "relative"}} 
    className="d-flex justify-content-center align-items-center contact-form"

  >
    {/* Fixed top bar */}
    <div style={{ 
      width: "100%", 
      height: "80px", 
      backgroundColor: "#345d95", 
      position: "absolute", 
      top: 0, 
      display: "flex", 
      justifyContent: "flex-end", 
      alignItems: "center" 
    }}>
      {[...Array(4)].map((_, index) => (
        <div key={index} style={{ 
          width: "50px", 
          height: "8px", 
          backgroundColor: "white", 
          borderRadius: "20px", 
          marginRight: "10px", 
          opacity: 0.5 
        }}></div>
      ))}
    </div>

    {/* Contact Me Title */}
    <h1 className="d-flex justify-content-start align-items-center" 
      style={{
        position: "absolute", 
        top: "20px", 
        left: "10px",
        color: "white"
      }}>
      Contact me
    </h1>

    {/* Form Column */}
    <Col md={6} className="mt-5">
      <form className="formC" onSubmit={sendEmail} ref={form}>
        <div className="form-group mb-4">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            name="name"
            placeholder="Enter your name"
            autoComplete="name"
            required
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className="form-control"
            name="message"
            rows="5"
            placeholder="Type your message here"
            autoComplete="off"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Send Message
        </button>
      </form>
    </Col>

    {/* Image Column */}
    <Col md={6}>
      <div>
        <img 
        loading="lazy"
          style={{ width: "100%", maxWidth: "600px" }} 
          src={contactGirl} 
          alt="image of the girl with envelope" 
        />
      </div>
    </Col>
  </Row>
   


<div className="contact-form">
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Email Sent Successfully</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Your message has been sent. We will get back to you shortly.
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-secondary"
              onClick={() => setShowModal(false)}
              style={{backgroundColor: "#345d95"}}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>

</Container>


  );
};

export default Contact;
