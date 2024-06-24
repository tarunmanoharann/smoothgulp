import React from 'react';
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import '../assets/css/footor.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className='motto'>Made For Kings and Queens</p>
        <div className="keywords">
          <span>Classic Beverages</span>
          <span>Site Feedback</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
      
      <div className="social-links">
        <a href="https://www.linkedin.com/in/tarun-manoharan/" target="_blank" rel="noopener noreferrer">
          <span className='icons'><FaInstagram /></span>
        </a>
        <a href="https://www.linkedin.com/in/tarun-manoharan/" target="_blank" rel="noopener noreferrer">
          <span className='icons'><FaFacebook /></span>
        </a>
        <a href="https://www.linkedin.com/in/tarun-manoharan/" target="_blank" rel="noopener noreferrer">
          <span className='icons'><FaXTwitter /></span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;