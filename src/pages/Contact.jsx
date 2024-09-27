import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Modal } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6thn1ir", // Replace with your service ID
        "template_2de1svh", // Replace with your template ID
        form.current,
        "baT40mDhsq67bU9vc" // Replace with your user ID
      )
      .then(
        () => {
          form.current.reset(); // Reset form after successful submission
          setShowModal(true); // Show success modal
        },
        (error) => {
          console.error("FAILED...", error.text); // Log error
          alert("Failed to send message. Please try again later."); // Optional: user feedback
        }
      );
  };

  return (
    <>
      <div className="contact-container">
        <section className="contact-header" id="header">
          <div className="overlay">
            <h1 className="animated-text">Contact Us</h1>
          </div>
        </section>

        <div className="contact-form">
          <form className="formC" onSubmit={sendEmail} ref={form}>
            <div className="form-group mb-4">
              <label htmlFor="name">Your Name</label>
              <input type="text" className="form-control" name="name" placeholder="Enter your name" required />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="email">Email Address</label>
              <input type="email" className="form-control" name="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" name="message" rows="5" placeholder="Type your message here" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>

          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Email Sent Successfully</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Your message has been sent. We will get back to you shortly.
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                Close
              </button>
            </Modal.Footer>
          </Modal>
        </div>

        {/* Footer Section */}
       
      </div>
    </>
  );
};

export default Contact;
