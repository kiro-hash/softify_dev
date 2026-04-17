import React from 'react'
import './Footer.css'
import services from '../data/services'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2 className="logo">Softify_dev</h2>
          <p>
            We build modern websites, mobile apps, and digital solutions.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-section">
          <h3>Navigation</h3>
          <a href="/">Home</a>
          <a href="/softify">Softify</a>
          <a href="/projects">Projects</a>
          <a href="/profile">Profile</a>
        </div>

        {/* Services (Dynamic) */}
        <div className="footer-section services-list">
          <h3>Services</h3>

          {services.map((service, index) => (
            <a href="#" key={index}>{service.title}</a>
          ))}

        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <a href="mailto:your@email.com">Email</a>
          <a href="https://wa.me/201234567890" target="_blank">WhatsApp</a>
          <a href="#">Location</a>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
        <div className="footer-section join">
          <h3>Join Us</h3>
          <p>Be part of Softify_dev and start your journey with us.</p>
          <a href="/careers" className="join-btn">Join Now</a>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Softify_dev. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer