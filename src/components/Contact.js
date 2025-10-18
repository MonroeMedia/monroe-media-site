import React from "react";
import "../App.css";
import profilePic from "../assets/images/eddie-headshot.jpeg"; // replace with your actual image


const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        <div className="contact-header">
          <div className="profile-wrapper">
            <img
              src={profilePic}
              alt="Eddie Monroe"
              className="profile-img"
            />
          </div>

          <h2 className="contact-title">Let's work together!</h2>

          <div className="contact-button-container">
            <button className="contact-button">
              <a href="https://forms.gle/mxzKKYU8DwUYLU5z6" target="_blank">Get in touch</a>
            </button>
          </div>
        </div>

        <div className="email-section">
          <button className="email-button">
            <span className="email-text">eddiemonroemedia@gmail.com</span>
          </button>
        </div>

        <div className="contact-footer">
          <p className="footer-bio">
            Building websites, creating digital marketing/branding campaigns and storytelling for small businesses and
            creators.
          </p>

          <div className="footer-info">
            <div className="footer-block">
              <h3>Version</h3>
              <p>2025 © Edition</p>
            </div>
            <div className="footer-block">
              <h3>Timezone</h3>
              <p>EST (GMT-5)</p>
            </div>
            <div className="footer-block socials">
              <h3>Socials</h3>
              <a href="https://www.instagram.com/monroemediacompany/" target="_blank">Instagram</a>
              <a href="https://www.facebook.com/MonroeMediaCompanyOfficial" target="_blank">Facebook</a>
              <a href="https://www.linkedin.com/in/eddie-monroe-media" target="_blank">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
