import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navBar'>
      <ul>
        <li><Link to="hero" smooth={true} duration={1000}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
        <li><Link to="experience" smooth={true} duration={1000}>Experience</Link></li>
        <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
