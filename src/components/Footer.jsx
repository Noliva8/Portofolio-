import React from 'react';
import './footer.css';


function Footer() {
  return (
    <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <h5>Contact Me</h5>
        <p>Email: <a href="mailto:nolivanoly@gmail.com">nolivanoly@gmail.com</a></p>
        <p>Phone: <a href="tel:+16515878364">+1 (651) 587-8364</a></p>
      </div>
      <div className="col-lg-4 col-md-6">
        <h5>Follow Me</h5>
        <p>
          <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://github.com/Noliva8" target="_blank" rel="noopener noreferrer"> GitHub</a> | 
          <a href="https://twitter.com/noliva2035" target="_blank" rel="noopener noreferrer"> Twitter</a>
        </p>
      </div>
      <div className="col-lg-4 col-md-6">
        <h5>Location</h5>
        <p>Arizona, USA</p>
      </div>
    </div>
    <hr />
    <p className="text-center">&copy; 2024 Olivier Ndicunguye - All Rights Reserved</p>
  </div>
</footer>

  );
}

export default Footer;
