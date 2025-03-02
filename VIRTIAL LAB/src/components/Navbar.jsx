import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const logo = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1735379774/logo_eb61r7.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Surabhi Logo" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/schedule">Event</Link>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <button className="login-button">LOGIN</button>
        </Link>
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <button className="reg-button">REGISTER</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 