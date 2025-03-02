import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const logo = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1740921252/icon_o7p77j.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 100); // 2 seconds delay
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Surabhi Logo" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
      </div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <div
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="#">About</Link>
          <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
            <Link to="/virtual-labs">Virtual Labs</Link>
            <Link to="/vlead">VLEAD</Link>
          </div>
        </div>
        <Link to="/about">I am</Link>
        <Link to="/events">I want to</Link>
        <Link to="/schedule">Analytics</Link>
      </div>
    </nav>
  );
};

export default Navbar;