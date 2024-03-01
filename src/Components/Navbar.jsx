import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import logo from '../logo.png'; 

const Navbar = () => {
  const toggleMenu = () => {
    const navCenter = document.getElementById("navCenter");
    if (navCenter) { // Always good to check if the element exists
      navCenter.classList.toggle("active");
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="hamburger" aria-label="Menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <a href="#home" className="navbar-logo">
          <img src={logo} alt="Navbar Logo" className="navbar-logo" />
        </a>
        <div id="navCenter" className="nav-center"> {/* Added id here */}
          <a href="#home">Home</a>
          <a href="#memberships">Memberships</a>
          <a href="#our-pts">Our PTs</a>
          <a href="#our-services">Our Services</a>
          <a href="#login">Login</a>
          <a href="#become-a-member" className="btn">Become a Member</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
