import React, { useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');

      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar" id="navbar">
      <div className="logo">chrisxsolo</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">Resume</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
