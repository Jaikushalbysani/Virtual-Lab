import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const logo = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1740921252/icon_o7p77j.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isIAmDropdownOpen, setIsIAmDropdownOpen] = useState(false);
  const [isIWantToDropdownOpen, setIsIWantToDropdownOpen] = useState(false);
  const [isAnalyticsDropdownOpen, setIsAnalyticsDropdownOpen] = useState(false);
  const aboutTimeoutRef = useRef(null);
  const iAmTimeoutRef = useRef(null);
  const iWantToTimeoutRef = useRef(null);
  const analyticsTimeoutRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
    }
    setIsAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 100);
  };

  const handleIAmMouseEnter = () => {
    if (iAmTimeoutRef.current) {
      clearTimeout(iAmTimeoutRef.current);
    }
    setIsIAmDropdownOpen(true);
  };

  const handleIAmMouseLeave = () => {
    iAmTimeoutRef.current = setTimeout(() => {
      setIsIAmDropdownOpen(false);
    }, 100);
  };

  const handleIWantToMouseEnter = () => {
    if (iWantToTimeoutRef.current) {
      clearTimeout(iWantToTimeoutRef.current);
    }
    setIsIWantToDropdownOpen(true);
  };

  const handleIWantToMouseLeave = () => {
    iWantToTimeoutRef.current = setTimeout(() => {
      setIsIWantToDropdownOpen(false);
    }, 100);
  };

  const handleAnalyticsMouseEnter = () => {
    if (analyticsTimeoutRef.current) {
      clearTimeout(analyticsTimeoutRef.current);
    }
    setIsAnalyticsDropdownOpen(true);
  };

  const handleAnalyticsMouseLeave = () => {
    analyticsTimeoutRef.current = setTimeout(() => {
      setIsAnalyticsDropdownOpen(false);
    }, 150);
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
          onMouseEnter={handleAboutMouseEnter}
          onMouseLeave={handleAboutMouseLeave}
        >
          <Link to="#">About</Link>
          <div className={`dropdown-content ${isAboutDropdownOpen ? 'show' : ''}`}>
            <Link to="/Virtual-labs">Virtual Labs</Link>
            <Link to="/Vlead">VLEAD</Link>
          </div>
        </div>
        <div
          className="dropdown"
          onMouseEnter={handleIAmMouseEnter}
          onMouseLeave={handleIAmMouseLeave}
        >
          <Link to="#">I am</Link>
          <div className={`dropdown-content ${isIAmDropdownOpen ? 'show' : ''}`}>
            <Link to="/Learner">a Learner</Link>
            <Link to="#">a Facilitator</Link>
            <Link to="#">a Creator</Link>
          </div>
        </div>
        <div
          className="dropdown"
          onMouseEnter={handleIWantToMouseEnter}
          onMouseLeave={handleIWantToMouseLeave}
        >
          <Link to="#">I want to</Link>
          <div className={`dropdown-content ${isIWantToDropdownOpen ? 'show' : ''}`}>
            <Link to="#">Create Experiment</Link>
            <Link to="#">Start Learning</Link>
            <Link to="#">Host Workshop</Link>
            <Link to="#">Explore Research</Link>
          </div>
        </div>
        <div
          className="dropdown"
          onMouseEnter={handleAnalyticsMouseEnter}
          onMouseLeave={handleAnalyticsMouseLeave}
        >
          <Link to="#">Analytics</Link>
          <div className={`dropdown-content ${isAnalyticsDropdownOpen ? 'show' : ''}`}>
            <Link to="#">Summary</Link>
            <Link to="#">Detailed Analysis</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;