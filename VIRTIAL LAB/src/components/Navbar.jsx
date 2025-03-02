import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const logo = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1740921252/icon_o7p77j.png';

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
      </div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/">About</Link>
        <Link to="/about">I am</Link>
        <Link to="/events">I want to</Link>
        <Link to="/schedule">Analytics</Link>
      </div>
    </nav>
  );
};

export default Navbar;