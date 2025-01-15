import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../Images/2-removebg-preview.png'; // Import the logo image

function Header() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu visibility

// Adding the scroll event listener on component mount
useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setScrollingDown(true); // User is scrolling down
    } else {
      setScrollingDown(false); // User is scrolling up
    }
    setLastScrollY(currentScrollY); // Update last scroll position
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [lastScrollY]);


  // Toggle menu visibility on mobile
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrollingDown ? 'header-hidden' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Capturra Studio Essence" />
      </div>
      <h1 className="logoName">Capturra Studio Essence</h1>
      <nav>
        {/* Hamburger Menu for Mobile */}
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/Services" onClick={closeMenu}>Bookings</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
