import React, { useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');

      // Add 'scrolled' class to navbar when scrolled
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    // Attach scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar" id="navbar">
      <div className="logo">Chris.dev</div>
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
